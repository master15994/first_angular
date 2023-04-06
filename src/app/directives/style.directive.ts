import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { __values } from 'tslib';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'orange';
  @Input() fontWeight = 'normal';

  // @HostBinding('style.color') elColor = null;
  constructor(private el: ElementRef, private r: Renderer2) {
    el.nativeElement.style.color = 'red';
  }

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.color = 'blue';
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.color = 'red';
  }
}
