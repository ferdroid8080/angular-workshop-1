import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habit-item',
  template: ` <li>{{ habit.title }}</li> `,
  styles: [],
})
export class HabitItemComponent {
  @Input() habit: any;
}
