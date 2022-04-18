import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerEventsService {

  constructor(
    private swUpdate: SwUpdate,
    private _snackBar: MatSnackBar
  ) { }

  /**
   * @description Listen to service worker updates.
   * @returns { void }
   */
  configureServiceWorker(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        switch (event.type) {
          case 'VERSION_DETECTED':
          case 'VERSION_READY':
            this.reloadApp('New version is available. Reloading the app...');
            break;

          case 'VERSION_INSTALLATION_FAILED':
            this.reloadApp(`Failed to install app version '${event.version.hash}': CLEAR BROWSER HISTORY AND RELOAD THE APP.`, false);
            break;
        }
      });

      this.swUpdate.unrecoverable.subscribe((event) => {
        this.reloadApp(`Unrecoverable error: ${event.reason}`);
      });
    }
  }

  /**
   * Reload application
   * @param reason { string } reason to be displayed in snackbar
   */
  private reloadApp(reason: string, shouldReload: boolean = true): void {
    this._snackBar.open(reason, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    if (shouldReload) {
      setTimeout(() => window.location.reload(), 6000);
    }
  }
}
