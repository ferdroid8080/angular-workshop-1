import { Component, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-item',
  template: `
    <li [style.color]="habit.streak ? 'red' : 'black'">
      {{ habit.title }} {{ habit.count }} <button type="button">Delete</button>
    </li>
  `,
  styles: [],
})
export class HabitItemComponent {
  @Input() habit!: Habit;
}
