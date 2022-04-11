import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, concatMap, from, last, map, Observable, switchMap } from 'rxjs';
import { Collections, Documents, Locale, PAGENAME } from '../global.model';
import { blogsData } from '../site-content/blogs';
import { educationData } from '../site-content/education';
import { introduction } from '../site-content/home';
import { projects } from '../site-content/projects';
import { skillsPageData } from '../site-content/skills';
import { workExperience } from '../site-content/work-experience';
import { navigation } from '../site-content/navigation';
import themeConfiguration from '../site-content/theme';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private locale$ = new BehaviorSubject<Locale>(Locale.en);
  private isDatabaseOnline$ = new BehaviorSubject<boolean>(false);
  private pagesWithSnapshot: Array<PAGENAME> = [PAGENAME.BLOGS, PAGENAME.PROJECTS, PAGENAME.WORK_EXPERIENCE, PAGENAME.THEMES];

  constructor(
    private datastore: AngularFirestore,
    private storage: AngularFireStorage,
    private snackBar: MatSnackBar
  ) { }

  /**
   * Gets content of a page from firestore. If firestore is down, returns static content.
   * @param pagename { PAGENAME } - Page Name
   * @returns { Observable<T | undefined> | Observable<Array<{ id: string, data: T }>> } - Observable of Page Content
   */
  getContentForPage<T>(pagename: PAGENAME): Observable<T | undefined> | Observable<Array<{ id: string, data: T }>> {
    if (this.pagesWithSnapshot.includes(pagename)) {
      return this.getContentWithIdForPage<T>(pagename);
    }
    return this.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = this.fetchDocumentName(locale, pagename);
        return this.datastore.collection<T>(Collections[pagename]).doc(document).valueChanges().pipe(
          map((data) => {
            if (data) {
              this.isDatabaseOnline$.next(true);
              return data;
            } else {
              return this.handleOfflineFirestoreData<T>(pagename, locale) as T;
            }
          })
        );
      })
    );
  }

  /**
   * Returns content of a page from firestore that has auto-generated document name
   * @param pagename { PAGENAME } - Page Name
   * @returns { Observable<Array<{ id: string, data: T }>> } - Observable of Page Content
   */
  private getContentWithIdForPage<T>(pagename: PAGENAME): Observable<Array<{ id: string, data: T }>> {
    return this.getApplicationLocale().pipe(
      switchMap(locale => this.datastore
        .collection<T>(Collections[pagename])
        .snapshotChanges().pipe(
          map((metadata) => {
            if (metadata?.length > 0) {
              const dataToReturn: Array<{ id: string, data: T }> = [];
              metadata.forEach((_data) => {
                const id = _data.payload.doc.id;
                const data = _data.payload.doc.data();
                if (locale === Locale.en) {
                  if (id.endsWith('_en')) {
                    dataToReturn.push({ id, data });
                  } else if (pagename === PAGENAME.THEMES) {
                    // for themes
                    dataToReturn.push({ id, data });
                  }
                } else {
                  if (id.endsWith('_hi')) {
                    dataToReturn.push({ id, data });
                  } else if (pagename === PAGENAME.THEMES) {
                    // for themes
                    dataToReturn.push({ id, data });
                  }
                }
              });
              this.isDatabaseOnline$.next(true);
              return dataToReturn;
            } else {
              return this.handleOfflineFirestoreData<Array<{ id: string, data: T }>>(pagename, locale);
            }
          })
        ))
    );
  }

  /**
   * Updates content of a page in firestore
   * @param pagename { PAGENAME } - Page Name
   * @param content { T } - Content
   * @param isArrayUpdateOp { boolean } - Is Array Update Operation
   * @returns { Observable<void> } - Observable
   */
  updatePageContent<T>(pagename: PAGENAME, content: T, isArrayUpdateOp: boolean = false, arrayIndex: number = 0): Observable<void> {
    return this.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = (this.pagesWithSnapshot.includes(pagename))
          ? content['id']
          : this.fetchDocumentName(locale, pagename);

        return (!isArrayUpdateOp)
          ? from(this.datastore.collection<T>(Collections[pagename]).doc(document).update(content))
          : from(this.datastore.collection<{ [key: number]: T }>(Collections[pagename]).doc(document).set({ [arrayIndex]: content['content'] }, { merge: true }));
      })
    );
  }

  /**
   * Deletes content of a page in firestore
   * @param pagename { PAGENAME } - Page Name
   * @returns { Observable<void> } - Observable
   */
  deletePageContent<T>(pagename: PAGENAME, content: T): Observable<void> {
    return this.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = (this.pagesWithSnapshot.includes(pagename))
          ? content['id']
          : this.fetchDocumentName(locale, pagename);
        return from(this.datastore.collection<T>(Collections[pagename]).doc(document).delete());
      })
    );
  }

  /**
   * Deletes content of a page in firestore
   * @param pagename { PAGENAME } - Page Name
   * @returns { Observable<void> } - Observable
   */
  addPageContent<T>(pagename: PAGENAME, content: T): Observable<void> {
    return this.getApplicationLocale().pipe(
      switchMap((locale) => {
        let documentId = this.createUniqueId();
        documentId = (locale === Locale.en) ? documentId + '_en' : documentId + '_hi';
        return from(this.datastore.doc<T>(`${Collections[pagename]}/${documentId}`).set(content));
      })
    );
  }

  /**
   * Uploads image to firebase storage
   * @param filePath { string } - File Path
   * @param file { File } - File to upload
   * @returns { Observable<string> } - Observable of File URL
   */
  uploadFileToFireStorage(filePath: string, file: File): Observable<string> {
    return this.storage.upload(filePath, file, {
      cacheControl: 'max-age=31536000, public'
    }).snapshotChanges().pipe(
      last(),
      concatMap(() => this.storage.ref(filePath).getDownloadURL())
    );
  }

  /**
   * Generates unique course id.
   * @returns { string } - The id of the course
   */
  createUniqueId(): string {
    return this.datastore.createId();
  }

  /**
   * Update locale of application
   * @param locale { Locale } - Locale
   */
  updateContentLanguage(locale: Locale): void {
    this.locale$.next(locale);
  }

  /**
   * Returns application locale
   * @returns { Observable<Locale> } - Observable of Locale
   */
  getApplicationLocale(): Observable<Locale> {
    return this.locale$.asObservable();
  }

  /**
   * Checks if firebase is connected
   * @returns { Observable<boolean> } - Observable of boolean
   */
  get isDatabaseOnline(): Observable<boolean> {
    return this.isDatabaseOnline$.asObservable();
  }

  /**
   * Computes firestore document name
   * @param locale { Locale } - Locale
   * @param pagename { PAGENAME } - Page Name
   * @returns { Documents } - Document Name
   */
  private fetchDocumentName(locale: Locale, pagename: PAGENAME): Documents {
    const mapper = {
      [PAGENAME.HOME]: {
        [Locale.en]: Documents.HOME_PAGE_EN,
        [Locale.hi]: Documents.HOME_PAGE_HI
      },
      [PAGENAME.SKILLS]: {
        [Locale.en]: Documents.SKILLS_PAGE_EN,
        [Locale.hi]: Documents.SKILLS_PAGE_HI
      },
      [PAGENAME.EDUCATION]: {
        [Locale.en]: Documents.EDUCATION_PAGE_EN,
        [Locale.hi]: Documents.EDUCATION_PAGE_HI
      },
      [PAGENAME.NAVIGATION]: {
        [Locale.en]: Documents.NAVIGATION_EN,
        [Locale.hi]: Documents.NAVIGATION_HI
      }
    };

    return mapper[pagename][locale];
  }

  /**
   * Returns the content of a page for offline access if in case firebase is down
   * @param pagename { PAGENAME } - Page Name
   * @returns { any } - Page Content
   */
  private getOfflineDataKey(pagename: PAGENAME): any {
    const mapper = {
      [PAGENAME.HOME]: introduction,
      [PAGENAME.SKILLS]: skillsPageData,
      [PAGENAME.EDUCATION]: educationData,
      [PAGENAME.BLOGS]: blogsData,
      [PAGENAME.PROJECTS]: projects,
      [PAGENAME.WORK_EXPERIENCE]: workExperience,
      [PAGENAME.NAVIGATION]: navigation,
      [PAGENAME.THEMES]: themeConfiguration
    };

    return mapper[pagename];
  }

  /**
   * Returns static data when firestore connection is down
   * @param pagename { PAGENAME } - Page Name
   * @param locale { Locale } - Locale
   * @returns { T } - Page Content
   */
  private handleOfflineFirestoreData<T>(pagename: PAGENAME, locale: Locale): T {
    this.isDatabaseOnline$.next(false);
    this.snackBar.open('Error connecting with firestore, displaying static data.', 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    return (pagename === PAGENAME.THEMES) ? this.getOfflineDataKey(pagename) as T : this.getOfflineDataKey(pagename)[locale] as T;
  }
}
