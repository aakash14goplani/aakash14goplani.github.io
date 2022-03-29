import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { Collections, Documents, IHomePage, Locale } from '../shared/global.model';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss']
})
export class HomeEditComponent implements OnInit, OnDestroy {

  homeEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private datastore: AngularFirestore,
    private contentService: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.homeEditForm = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required]
      // imageURL: '',
      // socialHandles: ''
    });
  }

  ngOnInit(): void {
    this.contentService.getApplicationLocale().pipe(
      tap(_ => this.displaySpinner.next(true)),
      switchMap((locale) => {
        const document = locale === Locale.en ? Documents.HOME_PAGE_EN : Documents.HOME_PAGE_HI;
        return this.datastore.collection<IHomePage>(Collections.HOME_PAGE).doc(document).valueChanges();
      }),
      takeUntil(this.unsubscriber$)
    ).subscribe({
      next: (data) => {
        if (data) {
          this.prefilForm(data);
        }
      },
      error: (err) => {
        this.handleFirebaseError(err);
      }
    });
  }

  private prefilForm(data: IHomePage) {
    this.homeEditForm.patchValue({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description
      // imageURL: '',
      // socialHandles: ''
    });
    this.displaySpinner.next(false);
  }

  private handleFirebaseError(err: any) {
    this._snackBar.open(err, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.displaySpinner.next(false);
  }

  onSubmit() { }

  ngOnDestroy(): void {
    this.displaySpinner.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
