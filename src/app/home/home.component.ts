import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  env: any;
  yearsOfExperience: number;

  constructor() {
    this.env = environment;
    this.yearsOfExperience = new Date().getFullYear() - new Date('10/07/2015').getFullYear();
  }

}
