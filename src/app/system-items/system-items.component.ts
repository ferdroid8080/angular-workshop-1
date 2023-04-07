import { Component } from '@angular/core';
import { Item } from '../data/system';
import { SystemService } from '../data/system.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-system-items',
  template: `
    <h3>Example Gear</h3>
    <ul>
      <li *ngFor="let item of items">
        {{ item.name }} - {{ item.description }}
      </li>
    </ul>
  `,
  styles: [],
})
export class SystemItemsComponent {
  items: Item[] = [];
  id!: number;

  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent &&
      this.route.parent.paramMap
        .pipe(
          switchMap((params: ParamMap) => {
            this.id = +params.get('id')!;
            return this.systemService.getSystemItems(this.id);
          })
        )
        .subscribe((data) => {
          this.items = data;
        });
  }
}
