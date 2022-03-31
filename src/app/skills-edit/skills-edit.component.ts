import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap, takeUntil, Subject } from 'rxjs';
import { ISkillsPage } from '../shared/global.model';
import { SkillsEditService } from './service/skills-edit.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SkillsEditService]
})
export class SkillsEditComponent implements OnInit, OnDestroy {

  skillsEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private service: SkillsEditService,
    private _snackBar: MatSnackBar
  ) {
    this.skillsEditForm = this.formConfiguration;
  }

  /**
   * Initializes Form Configuration
   */
  private get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      techSkillHeadline: ['', Validators.required],
      tableColumnA: ['', Validators.required],
      tableColumnB: ['', Validators.required],
      techContent: this.formBuilder.array([]),
      softSkillHeadline: ['', Validators.required],
      softContent: this.formBuilder.array([]),
      futureLearningHeadline: ['', Validators.required],
      futureLearnContent: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.service.initializeSkillsEditPageContent().pipe(
      tap(_ => this.displaySpinner.next(true)),
      takeUntil(this.unsubscriber$)
    ).subscribe({
      next: (data) => {
        if (data) {
          this.prefilForm(data);
          this.displaySpinner.next(false);
        }
      },
      error: (err) => {
        this.handleFirebaseError(err);
      }
    });
  }

  private prefilForm(data: ISkillsPage) {
    this.skillsEditForm.patchValue({
      softSkillHeadline: data.softSkillHeadline,
      softContent: this.prefilSoftContent(data.softContent)
    });
  }

  private prefilSoftContent(softContent: string[]) {
    softContent.forEach((content) => {
      (this.skillsEditForm.get('softContent') as FormArray).push(
        new FormControl(content, Validators.required)
      );
    });
  }

  /**
   * Remove soft skill from form
   * @param index { number } - index of the array
   */
  removeSoftSkill(index: number) {
    (this.skillsEditForm.get('softContent') as FormArray).removeAt(index);
  }

  /**
   * Returns FormControl for the soft skill
   * @param index { number } - index of the array
   * @returns { FormControl } - FormControl
   */
  getSoftSkillControlAt(index: number): FormControl {
    return (this.skillsEditForm.get('softContent') as FormArray).controls[index] as FormControl;
  }

  /**
   * Return social handles array control
   */
  get softSkillsControlFn() {
    return (this.skillsEditForm.get('softContent') as FormArray).controls;
  }

  /**
   * Add new soft skill to form
   */
  addNewSoftSkill(): void {
    (this.skillsEditForm.get('softContent') as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  /**
   * Handle Firebase Error
   * @param err { Error }
   */
  private handleFirebaseError(err: any) {
    this._snackBar.open(err, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.displaySpinner.next(false);
  }

  /**
   * Return back to home page when clicked on cancel button
   */
  backToHomePage() {
    this.router.navigate(['/home']);
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    this.skillsEditForm.updateValueAndValidity();
    /* if (this.skillsEditForm.valid) {
      this.service.onSubmit(this.skillsEditForm.value).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.handleFirebaseError(err);
        }
      });
    } */
  }

  ngOnDestroy(): void {
    this.displaySpinner.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
