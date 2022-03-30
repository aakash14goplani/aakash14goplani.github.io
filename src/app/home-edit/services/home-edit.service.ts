import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { switchMap, Observable, concatMap, last } from 'rxjs';
import { ContentService } from 'src/app/shared/content-service/content.service';
import { Locale, Documents, IHomePage, Collections } from 'src/app/shared/global.model';

@Injectable()
export class HomeEditService {

  constructor(
    private datastore: AngularFirestore,
    private storage: AngularFireStorage,
    private contentService: ContentService
  ) { }

  /**
   * Initializes Home Edit Page Content
   * @returns { Observable<IHomePage | undefined> }
   */
  initializeHomeEditPageContent(): Observable<IHomePage | undefined> {
    return this.contentService.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = locale === Locale.en ? Documents.HOME_PAGE_EN : Documents.HOME_PAGE_HI;
        return this.datastore.collection<IHomePage>(Collections.HOME_PAGE).doc(document).valueChanges();
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
   * Updates Home Page Content in Firestore
   * @param value { IHomePage } - Home Page Content
   * @returns { Observable<void> } - Observable of void
   */
  onSubmit(value: IHomePage): Observable<void> {
    return this.contentService.getApplicationLocale().pipe(
      switchMap((locale) => {
        const document = locale === Locale.en ? Documents.HOME_PAGE_EN : Documents.HOME_PAGE_HI;
        return this.datastore.collection<IHomePage>(Collections.HOME_PAGE).doc(document).update(value);
      })
    );
  }

}
