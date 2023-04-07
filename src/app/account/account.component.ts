import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
    <p>account works!</p>
    <ul>
      <li><a [routerLink]="['/account', 1]">Account 1</a></li>
      <li><a [routerLink]="['/account', 2]">Account 2</a></li>
      <li><a [routerLink]="['/account', 3]">Account 3</a></li>
    </ul>
  `,
  styles: [],
})
export class AccountComponent {}
