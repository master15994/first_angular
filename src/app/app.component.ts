import { Component, ErrorHandler } from '@angular/core';
import { withNavigationErrorHandler } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  time: Date = new Date();
  objs = [
    {
      title: 'Post-1',
      author: 'Bekan',
      comment: [
        { name: 'Bek', text: 'lorem-1' },
        { name: 'Bek', text: 'lorem-1' },
        { name: 'Bek', text: 'lorem-1' },
      ],
    },

    {
      title: 'Post-2',
      author: 'Bekan-2',
      comment: [
        { name: 'Bek-2', text: 'lorem-1' },
        { name: 'Bek-2', text: 'lorem-1' },
        { name: 'Bek-2', text: 'lorem-1' },
      ],
    },
  ];
  arr = [1, 1, 2, 3, 4, 8];
  img =
    'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-vert.png';
  constructor() {
    setTimeout(() => {
      console.log('Time is over');
      this.img =
        'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-jaune.png';
    }, 3000);
  }
}
