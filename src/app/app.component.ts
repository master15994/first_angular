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
  isVisible = true;
}
