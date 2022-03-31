import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/shared/content-service/content.service';
import { ISkillsPage, PAGENAME } from 'src/app/shared/global.model';

@Injectable()
export class SkillsEditService {

  constructor(
    private datastore: AngularFirestore,
    private contentService: ContentService
  ) { }

  /**
   * Initializes Home Edit Page Content
   * @returns { Observable<IHomePage | undefined> }
   */
  initializeSkillsEditPageContent(): Observable<ISkillsPage | undefined> {
    return this.contentService.getContentForPage<ISkillsPage>(PAGENAME.SKILLS);
  }
}
