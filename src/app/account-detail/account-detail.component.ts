import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: `
    <p>account-detail works!</p>
    <p>Account ID: {{ id }}</p>
    <ul>
      <li><a [routerLink]="['/account', 1]">Account 1</a></li>
      <li><a [routerLink]="['/account', 2]">Account 2</a></li>
      <li><a [routerLink]="['/account', 3]">Account 3</a></li>
    </ul>
    <hr />
    <ul>
      <li><a routerLinkActive="active" routerLink="info">Info</a></li>
      <li><a routerLinkActive="active" routerLink="items">Items</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AccountDetailComponent {
  id: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.id = +this.route.snapshot.paramMap.get('id')!; // access routeParams through snapshot
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!;
    }); // access routeParams through observable
  }
}
