import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [];

  constructor(private http: HttpClient) {}

  getHabbits(): Observable<Habit[]> {
    // return of(this.habits);
    return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(newHabit: any) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
