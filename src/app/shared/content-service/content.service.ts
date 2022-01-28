import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Locale, PAGENAME } from '../global.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private locale$ = new BehaviorSubject<Locale>(Locale.en);

  constructor() { }

  getContentForPage(pagename: PAGENAME) {
    // firebase service making call to retrieve content as per page
  }

  updateContentLanguage(locale: Locale): void {
    this.locale$.next(locale);
  }

  getApplicationLocale(): Observable<Locale> {
    return this.locale$.asObservable();
  }
}
