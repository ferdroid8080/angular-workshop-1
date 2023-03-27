import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h1>Habits</h1>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits | async"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits!: Observable<Habit[]>;

  constructor(private habitsService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitsService.getHabbits().pipe(
      map((habits) => {
        return habits.map((habit) => {
          habit.streak = habit.count > 5;
          return habit;
        });
      })
    );
  }

  onAddHabit(newHabit: any) {
    this.habitsService.addHabit(newHabit);
  }
}
