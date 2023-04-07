import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: `
    <p>account-detail works!</p>
    <p>Account ID: {{ id }}</p>
  `,
  styles: [],
})
export class AccountDetailComponent {
  id: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }
}
