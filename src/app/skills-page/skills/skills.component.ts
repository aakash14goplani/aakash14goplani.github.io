import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, tap } from 'rxjs';
import { ContentService } from '../../shared/content-service/content.service';
import { ISkillsPage, PAGENAME } from '../../shared/global.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, OnDestroy {

  displayedColumns: Array<string> = ['expertise', 'skills'];
  skillsData$!: Observable<ISkillsPage | undefined>;
  displaySpinner$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public contentService: ContentService,
    public firebaseAuth: AngularFireAuth,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.displaySpinner$.next(true);
    this.skillsData$ = (this.contentService.getContentForPage<ISkillsPage>(PAGENAME.SKILLS) as Observable<ISkillsPage>)
      .pipe(
        tap(_ => this.displaySpinner$.next(false)),
        catchError((err) => {
          this._snackBar.open(err, 'X', {
            duration: 6000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          this.displaySpinner$.next(false);
          return EMPTY;
        })
      );
  }

  editSkillsPageDetails() {
    this.router.navigate(['/skills-edit']);
  }

  ngOnDestroy(): void {
    this.displaySpinner$.complete();
  }
}
