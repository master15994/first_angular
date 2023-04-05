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
  posts: Post[] = [
    {
      title: 'Как слетать "Марс" на туда-обратно без гроша в кармани ',
      text: 'Проезд нужно будет оплатить на Марсе',
      id: 1,
    },
    {
      title: 'Избавление от деманов',
      text: ' Хотите избавится от деманов - Звоните!',
      id: 2,
    },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
