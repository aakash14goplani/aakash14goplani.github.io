import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, concatMap, last, map, Observable, switchMap } from 'rxjs';
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
   * @returns { Observable<T | undefined> | Observable<T[]> } - Observable of Page Content
   */
  getContentForPage<T>(pagename: PAGENAME): Observable<T | undefined> | Observable<T[]> {
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
   * @returns { Observable<T[]> } - Observable of Page Content
   */
  private getContentWithIdForPage<T>(pagename: PAGENAME): Observable<T[]> {
    return this.getApplicationLocale().pipe(
      switchMap(locale => this.datastore
        .collection<T>(Collections[pagename])
        .snapshotChanges().pipe(
          map((metadata) => {
            const dataToReturn: T[] = [];
            metadata.forEach((_data) => {
              const id = _data.payload.doc.id;
              const data = _data.payload.doc.data();
              if (locale === Locale.en) {
                if (id.endsWith('_en')) {
                  dataToReturn.push(data);
                }
              } else {
                if (id.endsWith('_hi')) {
                  dataToReturn.push(data);
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
   * @returns { Observable<PAGE> } - Observable of Page Content
   */
  updatePageContent<T>(pagename: PAGENAME, content: T): Observable<void> {
    return this.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = this.fetchDocumentName(locale, pagename);
        return this.datastore.collection<T>(Collections[pagename]).doc(document).update(content);
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
      [PAGENAME.PROJECTS]: {
        [Locale.en]: Documents.PROJECTS_PAGE_EN,
        [Locale.hi]: Documents.PROJECTS_PAGE_HI
      },
      [PAGENAME.BLOGS]: {
        [Locale.en]: Documents.BLOGS_PAGE_EN,
        [Locale.hi]: Documents.BLOGS_PAGE_HI
      },
      [PAGENAME.EDUCATION]: {
        [Locale.en]: Documents.EDUCATION_PAGE_EN,
        [Locale.hi]: Documents.EDUCATION_PAGE_HI
      },
      [PAGENAME.WORK_EXPERIENCE]: {
        [Locale.en]: Documents.WORK_EXPERIENCE_PAGE_EN,
        [Locale.hi]: Documents.WORK_EXPERIENCE_PAGE_HI
      }
    };

    return mapper[pagename][locale];
  }
}
