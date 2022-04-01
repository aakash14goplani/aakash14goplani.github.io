import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap, takeUntil, Subject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { ISkills, ISkillsPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsEditComponent implements OnInit, OnDestroy {

  skillsEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private service: ContentService,
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
    this.service.getContentForPage<ISkillsPage>(PAGENAME.SKILLS).pipe(
      tap(_ => this.displaySpinner.next(true)),
      takeUntil(this.unsubscriber$)
    ).subscribe({
      next: (data) => {
        if (data) {
          this.prefillForm(data);
          this.displaySpinner.next(false);
        }
      },
      error: (err) => {
        this.handleFirebaseError(err);
      }
    });
  }

  /**
   * Prefill form with data from firebase
   * @param data { ISkillsPage } - data from firebase
   */
  private prefillForm(data: ISkillsPage) {
    this.skillsEditForm.patchValue({
      techSkillHeadline: data.techSkillHeadline,
      tableColumnA: data.tableColumnA,
      tableColumnB: data.tableColumnB,
      techContent: this.prefillContentForTechSkill(data.techContent),
      softSkillHeadline: data.softSkillHeadline,
      softContent: this.prefillContentFor(data.softContent, 'softContent'),
      futureLearningHeadline: data.futureLearningHeadline,
      futureLearnContent: this.prefillContentFor(data.futureLearnContent, 'futureLearnContent')
    });
  }

  /**
   * Prefill content for soft skills and future learning form array content
   * @param contentArray { any[] } - array of content
   * @param controlName { string } - name of the control
   */
  private prefillContentFor(contentArray: string[], controlName: string) {
    contentArray.forEach((content) => {
      (this.skillsEditForm.get(controlName) as FormArray).push(
        new FormControl(content, Validators.required)
      );
    });
  }

  /**
   * Prefill content for soft skills and future learning form array content
   * @param contentArray { any[] } - array of content
   * @param controlName { string } - name of the control
   */
  private prefillContentForTechSkill(techSkills: ISkills[]) {
    techSkills.forEach((techSkill) => {
      (this.skillsEditForm.get('techContent') as FormArray).push(
        this.formBuilder.group({
          expertise: [techSkill.expertise, Validators.required],
          skills: [techSkill.skills, Validators.required]
        })
      );
    });
  }

  /**
   * Remove soft skill / future learning from the form
   * @param controlName { string } - name of the control
   * @param index { number } - index of the array
   */
  removeContentFor(controlName: string, index: number) {
    (this.skillsEditForm.get(controlName) as FormArray).removeAt(index);
  }

  /**
   * Returns FormControl for the soft skill & future learning skills
   * @param index { number } - index of the array
   * @returns { FormControl } - FormControl
   */
  getFormControlFor(controlName: string, index: number): FormControl {
    return (this.skillsEditForm.get(controlName) as FormArray).controls[index] as FormControl;
  }

  /**
   * Returns AbstractControl for the future learning & soft skills
   * @param controlName { string } - name of the control
   * @returns { AbstractControl[] }
   */
  getAbstractControlFor(controlName: string): AbstractControl[] {
    return (this.skillsEditForm.get(controlName) as FormArray).controls;
  }

  /**
   * Add new soft skill to form
   * @param controlName { string } - name of the control
   */
  addNewSkillFor(controlName: string): void {
    (this.skillsEditForm.get(controlName) as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  /**
   * Add new soft skill to form
   */
  addNewTechSkill(): void {
    (this.skillsEditForm.get('techContent') as FormArray).push(
      this.formBuilder.group({
        expertise: ['', Validators.required],
        skills: ['', Validators.required]
      })
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
  backToSkillsPage() {
    this.router.navigate(['/skills']);
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    this.skillsEditForm.updateValueAndValidity();
    if (this.skillsEditForm.valid) {
      this.service.updatePageContent<ISkillsPage>(PAGENAME.SKILLS, this.skillsEditForm.value).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/skills']);
        },
        error: (err) => {
          this.handleFirebaseError(err);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.displaySpinner.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
