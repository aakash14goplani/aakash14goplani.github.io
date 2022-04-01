import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IBlogsPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsComponent implements OnInit {

  blogData$!: Observable<IBlogsPage[]>;
  displaySpinner$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private contentService: ContentService,
    private router: Router,
    public firebaseAuth: AngularFireAuth,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.displaySpinner$.next(true);
    this.blogData$ = (this.contentService.getContentForPage<IBlogsPage>(PAGENAME.BLOGS) as Observable<IBlogsPage[]>)
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

  editBlogsPageDetails(blogData: IBlogsPage): void {
    this.router.navigate(['/blogs-edit'], { state: { data: blogData } });
  }

}
