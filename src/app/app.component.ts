import { Component, ErrorHandler } from '@angular/core';
import { withNavigationErrorHandler } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputValue = '';
  title = 'Fisrt Step in Angular btch';
  number = 99;
  img =
    'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-vert.png';
  constructor() {
    setTimeout(() => {
      console.log('Time is over');
      this.img =
        'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-jaune.png';
    }, 3000);
  }

  onInput(event?: any) {
    console.log('Event', event);
    this.inputValue = event.target.value;
  }

  onClick() {
    console.log('Shit man');
  }
}
