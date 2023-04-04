import { Component } from '@angular/core';

@Component({
  selector: 'app-post2',
  template: `
    <div>
      <h2>Angular Test</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
        blanditiis?
      </p>
    </div>
  `,
  styles: [
    `
      p {
        color: red;
        margin: 10rem;
        border: 2px solid yellow;
        padding: 2rem;
      }
      h2 {
        font-size: 4rem;
        color: yellow;
      }
    `,
  ],
})
export class Post2Component {}
