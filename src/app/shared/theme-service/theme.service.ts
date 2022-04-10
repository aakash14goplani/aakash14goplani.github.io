import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContentService } from '../content-service/content.service';
import { IThemes, PAGENAME } from '../global.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private contentService: ContentService
  ) { }

  /**
   * Fetch theme from firestore.
   * @returns { Observable<IThemes> } - Observable of Theme Configuration
   */
  getThemeOptions(): Observable<Array<IThemes>> {
    return (this.contentService.getContentForPage<Array<{ id: string, data: { [key: number]: Array<IThemes> } }>>(PAGENAME.THEMES) as Observable<Array<{ id: string, data: { [key: number]: Array<IThemes> } }>>).pipe(
      map(data => data[0].data[0])
    );
  }

  /**
   * Sets the theme configuration for the specified key.
   * @param themeToSet { string } - Theme to set
   */
  setTheme(themeToSet: string): void {
    this.setStyle('theme', `../../../../assets/css/${themeToSet}.css`);
  }

  /**
   * Set the stylesheet with the specified key.
   * @param key { string } - Key of the stylesheet
   * @param href { string } - Path to the stylesheet
   */
  setStyle(key: string, href: string): void {
    getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   * @param key { string } - Key of the stylesheet
   */
  removeStyle(key: string): void {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

/**
 * Returns the stylesheet link element for the specified key.
 * @param key { string } - Key of the stylesheet
 * @returns { HTMLLinkElement } - Link element for the specified key
 */
function getLinkElementForKey(key: string): Element {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

/**
 * Returns the existing stylesheet link element for the specified key.
 * @param key { string } - Key of the stylesheet
 * @returns { HTMLLinkElement } - Link element for the specified key
 */
function getExistingLinkElementByKey(key: string): Element | null {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

/**
 * Returns a new stylesheet link element for the specified key.
 * @param key { string } - Key of the stylesheet
 * @returns { HTMLLinkElement } - Link element for the specified key
 */
function createLinkElementWithKey(key: string): HTMLLinkElement {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

/**
 * Returns the class name for the specified key.
 * @param key { string } - Key of the stylesheet
 * @returns { string } - Class name for the specified key
 */
function getClassNameForKey(key: string): string {
  return `app-${key}`;
}
