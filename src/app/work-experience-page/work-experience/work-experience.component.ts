import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, combineLatest, EMPTY, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from '../../shared/content-service/content.service';
import { ICompanyExperience, Locale, PAGENAME } from '../../shared/global.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent implements OnInit {

  private EXPERIENCE_DATA: Array<ICompanyExperience> = [];
  private locale: Locale = Locale.en;
  private unsubscriber$: Subject<void> = new Subject<void>();
  displaySpinner$: Subject<boolean> = new Subject<boolean>();
  isAdmin$!: Observable<boolean>;
  dataSource$!: Observable<ICompanyExperience[]>;
  showMoreContent: boolean = false;
  private documentId: string = '';
  treeControl: FlatTreeControl<ICompanyExperience> = new FlatTreeControl<ICompanyExperience>(
    node => node.level,
    node => node.expandable
  );

  constructor(
    private contentService: ContentService,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isAdmin$ = combineLatest([
      this.firebaseAuth.user,
      this.contentService.isDatabaseOnline
    ]).pipe(
      map(([user, isOnline]) => !!user && !!isOnline)
    );

    this.displaySpinner$.next(true);
    type inputValueType = { [key: number]: ICompanyExperience[] };
    type returnValueType = Observable<Array<{ id: string, data: inputValueType }>>;
    this.dataSource$ = (this.contentService.getContentForPage<inputValueType>(PAGENAME.WORK_EXPERIENCE) as returnValueType)
      .pipe(
        map(data => data.map(_data => ({ id: _data.id, data: _data.data[0] }))[0]),
        tap((data: { id: string, data: ICompanyExperience[] }) => {
          this.EXPERIENCE_DATA = data.data;
          this.documentId = data.id;
          this.displaySpinner$.next(false);
        }),
        map(data => data.data),
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

  hasChild = (_: number, node: ICompanyExperience) => node.expandable;

  shouldRender(node: ICompanyExperience) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }

  private getParentNode(node: ICompanyExperience) {
    const nodeIndex = this.EXPERIENCE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.EXPERIENCE_DATA[i].level === node.level - 1) {
        return this.EXPERIENCE_DATA[i];
      }
    }

    return null;
  }

  computeRootNodeDuration(_startDate: Timestamp | any, _endDate: Timestamp | null): string {
    const startDate: Date = _startDate?.toDate ? _startDate.toDate() : _startDate as Date;
    const endDate: Date = _endDate?.toDate ? _endDate.toDate() : new Date();
    let totalYears = endDate.getFullYear() - startDate.getFullYear();
    let partialMonths = endDate.getMonth() - startDate.getMonth();
    if (partialMonths < 0) {
      totalYears--;
      partialMonths = partialMonths + 12;
    }
    const _dateContent = {
      years: this.locale === Locale.en ? ' years, ' : ' साल, ',
      months: this.locale === Locale.en ? ' months' : ' महीने'
    };

    return totalYears + _dateContent.years + partialMonths + _dateContent.months;
  }

  updateShowMoreContentForNode(node: ICompanyExperience) {
    node.showMoreContent = !node.showMoreContent;
  }

  /**
   * Delete Work Experience details
   */
  deleteWorkExperience(templateRef: TemplateRef<any>) {
    const dialogRef = this.dialog.open(templateRef);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        /* this.displaySpinner$.next(true);
        this.contentService.deletePageContent<ICompanyExperience>(PAGENAME.PROJECTS, this.EXPERIENCE_DATA[0]).pipe(
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
        ).subscribe(); */
      }
    });
  }

  /**
   * Edit Work Experience details
   */
  editWorkExperience(): void {
    this.router.navigate(['/work-experience-edit'], { state: { data: { id: this.documentId, content: this.EXPERIENCE_DATA } } });
  }

  /**
   * Add Work Experience details
   */
  addWorkExperience() {
    this.router.navigate(['/work-experience-add']);
  }

}
