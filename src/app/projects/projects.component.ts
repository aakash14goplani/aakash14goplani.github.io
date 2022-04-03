import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, combineLatest, EMPTY, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IProjectsPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projectContents$!: Observable<IProjectsPage[]>;
  displaySpinner$: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  isAdmin$!: Observable<boolean>;

  constructor(
    private contentService: ContentService,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // async triggers subscription. Having multiple async will cause multiple subscriptions i.e. will
    // trigger same network request multiple times. This hack prevents that.
    this.isAdmin$ = combineLatest([
      this.firebaseAuth.user,
      this.contentService.isDatabaseOnline
    ]).pipe(
      map(([user, isOnline]) => !!user && !!isOnline)
    );

    this.displaySpinner$.next(true);
    this.projectContents$ = (this.contentService.getContentForPage<IProjectsPage>(PAGENAME.PROJECTS) as Observable<Array<{ id: string, data: IProjectsPage }>>)
      .pipe(
        map(data => data.map(_data => ({ id: _data.id, ..._data.data }))),
        tap(_ => this.displaySpinner$.next(false)),
        catchError((err) => {
          this.snackBar.open(err, 'X', {
            duration: 6000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          this.displaySpinner$.next(false);
          return EMPTY;
        })
      );
  }

  /**
   * Enhance performance of NgFor loop
   * @param index { number } - The index of the project
   * @param item { IProjectsPage } - The project content
   * @returns { string } - id used for tracking
   */
  trackById(index: number, item: IProjectsPage): string {
    return index + item.pid;
  }

  /**
   * Expand details of a project
   * @param project { IProjectsPage } - The project details to be expanded
   */
  updateShowMoreContentForProject(project: IProjectsPage): void {
    project.showMoreContent = !project.showMoreContent;
  }

  /**
   * Delete projects entry on confirmation
   * @param projectsData { IProjectsPage } - The projects data to be deleted
   * @param templateRef { TemplateRef<any> } - The template reference to be used for the dialog
   */
  launchDeleteConfirmationModal(projectsData: IProjectsPage, templateRef: TemplateRef<any>): void {
    const dialogRef = this.dialog.open(templateRef);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.displaySpinner$.next(true);
        this.contentService.deletePageContent<IProjectsPage>(PAGENAME.PROJECTS, projectsData).pipe(
          tap(_ => this.displaySpinner$.next(false)),
          catchError((err) => {
            this.snackBar.open(err, 'X', {
              duration: 6000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            });
            this.displaySpinner$.next(false);
            return EMPTY;
          }),
          takeUntil(this.unsubscriber$)
        ).subscribe();
      }
    });
  }

  /**
   * Edit projects entry
   * @param projectData { IProjectsPage } - projects to be edited
   */
  editProjectsPageDetails(projectData: IProjectsPage): void {
    this.router.navigate(['/projects-edit'], { state: { data: projectData } });
  }

  /**
   * Add new projects entry
   */
  addNewProject(): void {
    this.router.navigate(['/projects-add']);
  }

  ngOnDestroy(): void {
    this.displaySpinner$.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
