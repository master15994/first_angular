import { Component, ErrorHandler } from '@angular/core';
import { withNavigationErrorHandler } from '@angular/router';
import { timeout } from 'rxjs';

export interface Post {
  title: string;
  text: string;
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addPost() {
    this.posts.unshift({
      title: 'Angular Newest',
      text: 'Bekan new Suit',
    });
  }

  search = '';
  searchField = 'title';
  posts: Post[] = [
    { title: 'Beer', text: 'Самое лучшие пиво в мире' },
    { title: 'Bread', text: 'Самое лучшие хлеб в мире' },
    { title: 'JS', text: 'Самое лучшие язык в мире' },
  ];
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
