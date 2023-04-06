import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
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
