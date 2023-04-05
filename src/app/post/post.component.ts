import {
  AfterContentChecked,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnChanges {
  @Input() post!: Post;
  @ContentChild('info', { static: true }) infoRef!: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' ngOnChanges', changes);

    // ngDoCheck(): void {
    //   Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //   Add 'implements DoCheck' to the class.
    //   console.log('ngDoCheck');

    // ngAfterContentChecked(): void {
    //   Called after every check of the component's or directive's content.
    //   Add 'implements AfterContentChecked' to the class.
    //   console.log('ngAfterContentChecked');
    // ngOnDestroy(): void {
    //   Called once, before the instance is destroyed.
    //   Add 'implements OnDestroy' to the class.
    //   console.log(' ngOnDestroy');
  }
}
