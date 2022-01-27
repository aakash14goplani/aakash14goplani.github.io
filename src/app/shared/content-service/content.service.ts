import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { INavigation, Locale, PAGENAME } from '../global.model';
import { introduction } from '../site-content/home';
import navigation from '../site-content/navigation';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private locale$ = new BehaviorSubject<Locale>(Locale.en);

  constructor() { }

  getContentForPage(pagename: PAGENAME) {
    // firebase service making call to retrieve content as per page
  }

  getNavigationConfiguration(): Observable<Array<INavigation>> {
    return of(navigation);
  }

  updateContentLanguage(locale: Locale): void {
    this.locale$.next(locale);
  }

  getApplicationLocale(): Observable<Locale> {
    return this.locale$.asObservable();
  }
}
