import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <app-habit-list></app-habit-list>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['h1 { color: blue }'],
})
export class AppComponent {
  title = 'egghead-angular-1';
}
