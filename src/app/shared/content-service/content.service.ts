import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INavigation, PAGENAME } from '../global.model';
import navigation from '../site-content/navigation';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContentForPage(pagename: PAGENAME): void { }

  getNavigationConfiguration(): Observable<Array<INavigation>> {
    return of(navigation);
  }
}
