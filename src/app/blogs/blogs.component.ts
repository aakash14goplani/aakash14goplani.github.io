import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IBlogsPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsComponent implements OnInit, OnDestroy {

  blogData$!: Observable<IBlogsPage[]>;
  displaySpinner$: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  @ViewChild('deleteConfirmationModal', { static: true }) dialogContent!: TemplateRef<any>;

  constructor(
    private contentService: ContentService,
    private router: Router,
    public firebaseAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displaySpinner$.next(true);
    this.blogData$ = (this.contentService.getContentForPage<IBlogsPage>(PAGENAME.BLOGS) as Observable<Array<{ id: string, data: IBlogsPage }>>)
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
   * Delete blog entry on confirmation
   * @param blogData { IBlogsPage } - The blog data to be deleted
   * @param templateRef { TemplateRef<any> } - The template reference to be used for the dialog
   */
  launchDeleteConfirmationModal(blogData: IBlogsPage, templateRef: TemplateRef<any>): void {
    const dialogRef = this.dialog.open(templateRef);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.displaySpinner$.next(true);
        this.contentService.deletePageContent<IBlogsPage>(PAGENAME.BLOGS, blogData).pipe(
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
   * Edit blog entry
   * @param blogData { IBlogsPage } - Blog to be edited
   */
  editBlogsPageDetails(blogData: IBlogsPage): void {
    this.router.navigate(['/blogs-edit'], { state: { data: blogData } });
  }

  /**
   * Add new blog entry
   */
  addNewBlog(): void {
    this.router.navigate(['/blogs-add']);
  }

  ngOnDestroy(): void {
    this.displaySpinner$.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
