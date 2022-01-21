import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IThemes } from '../global.model';
import themeConfiguration from '../site-content/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  getThemeOptions(): Observable<Array<IThemes>> {
    return of(themeConfiguration);
  }

  setTheme(themeToSet: string) {
    this.setStyle('theme', `../../../../assets/css/${themeToSet}.css`);
  }

  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string) {
    getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string) {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `app-${key}`;
}