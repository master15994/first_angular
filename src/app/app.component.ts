import { Component, ErrorHandler } from '@angular/core';
import { withNavigationErrorHandler } from '@angular/router';
import { timeout } from 'rxjs';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  e: number = Math.E;
  str = 'see u tomorrow ';

  date: Date = new Date();

  float = 0.42;

  obj = {
    a: 1,
    b: 1,
    c: { e: 2, f: 3 },
    g: {
      k: {
        l: 1,
      },
    },
  };
}
