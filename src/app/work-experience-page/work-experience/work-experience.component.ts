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

type inputValueType = { [key: number]: ICompanyExperience[] };
type returnValueType = Observable<Array<{ id: string, data: inputValueType }>>;

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
  dataSource$!: Observable<{ id: string, data: inputValueType }[]>;
  showMoreContent: boolean = false;
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
    this.dataSource$ = (this.contentService.getContentForPage<inputValueType>(PAGENAME.WORK_EXPERIENCE) as returnValueType)
      .pipe(
        tap((data) => {
          this.displaySpinner$.next(false);
        }),
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
   * Compute if node has childrens
   * @param _ ( number ) - index of current node
   * @param node { ICompanyExperience } - current node
   * @returns { boolean } - true if has children
   */
  hasChild = (_: number, node: ICompanyExperience) => node.expandable;

  /**
   * Should renter current node as parent node
   * @param node { ICompanyExperience } - current node
   * @returns { boolean } - true if node is expanded
   */
  shouldRender(node: ICompanyExperience): boolean {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }

  /**
   * We need to set this as it will be required while computing parent node
   * @param data { ICompanyExperience[] } - data to be displayed
   */
  setExperienceData(data: ICompanyExperience[]): void {
    if (data) {
      this.EXPERIENCE_DATA = [...data];
    }
  }

  /**
   * Computes parent mode for given node
   * @param node { ICompanyExperience } - current node
   * @returns { ICompanyExperience | null } - parent node
   */
  private getParentNode(node: ICompanyExperience): ICompanyExperience | null {
    const nodeIndex = this.EXPERIENCE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.EXPERIENCE_DATA[i].level === node.level - 1) {
        return this.EXPERIENCE_DATA[i];
      }
    }

    return null;
  }

  /**
   * Compute the total number of months/years for particular position
   * @param _startDate { Timestamp } - start date
   * @param _endDate { Timestamp } - end date
   * @returns { string } - formatted date
   */
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

  /**
   * Toggle data when user click on expand/collapse show more button
   * @param node { ICompanyExperience } - current node
   */
  updateShowMoreContentForNode(node: ICompanyExperience): void {
    node.showMoreContent = !node.showMoreContent;
  }

  /**
   * Delete Work Experience details
   * @param { TemplateRef } - Delete Modal reference
   * @param { string } - current document id
   * @param { ICompanyExperience[] } - current document content
   */
  deleteWorkExperience(templateRef: TemplateRef<any>, id: string, content: ICompanyExperience[]): void {
    const dialogRef = this.dialog.open(templateRef);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.displaySpinner$.next(true);
        const dataToFirestore = { id, content };
        this.contentService.deletePageContent<{ id: string, content: ICompanyExperience[] }>(PAGENAME.WORK_EXPERIENCE, dataToFirestore).pipe(
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
   * Edit Work Experience details
   * @param { string } - current document id
   * @param { ICompanyExperience[] } - current document content
   */
  editWorkExperience(id: string, content: ICompanyExperience[]): void {
    this.router.navigate(['/work-experience-edit'], { state: { data: { id, content } } });
  }

  /**
   * Add Work Experience details
   */
  addWorkExperience() {
    this.router.navigate(['/work-experience-add']);
  }

}
