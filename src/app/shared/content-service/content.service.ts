import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, concatMap, from, last, map, Observable, switchMap, tap } from 'rxjs';
import { Collections, Documents, Locale, PAGENAME } from '../global.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private locale$ = new BehaviorSubject<Locale>(Locale.en);
  private pagesWithSnapshot: Array<PAGENAME> = [PAGENAME.BLOGS, PAGENAME.PROJECTS, PAGENAME.WORK_EXPERIENCE];

  constructor(
    private datastore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  /**
   * Gets content of a page from firestore
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
        return this.datastore.collection<T>(Collections[pagename]).doc(document).valueChanges();
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
            const dataToReturn: Array<{ id: string, data: T }> = [];
            metadata.forEach((_data) => {
              const id = _data.payload.doc.id;
              const data = _data.payload.doc.data();
              if (locale === Locale.en) {
                if (id.endsWith('_en')) {
                  dataToReturn.push({ id, data });
                }
              } else {
                if (id.endsWith('_hi')) {
                  dataToReturn.push({ id, data });
                }
              }
            });
            return dataToReturn;
          })
        ))
    );
  }

  /**
   * Updates content of a page in firestore
   * @param pagename { PAGENAME } - Page Name
   * @returns { Observable<void> } - Observable
   */
  updatePageContent<T>(pagename: PAGENAME, content: T): Observable<void> {
    return this.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = (this.pagesWithSnapshot.includes(pagename))
          ? content['id']
          : this.fetchDocumentName(locale, pagename);
        return from(this.datastore.collection<T>(Collections[pagename]).doc(document).update(content));
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
      }
    };

    return mapper[pagename][locale];
  }
}
