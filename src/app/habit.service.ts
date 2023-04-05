import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [];
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getHabbits(): Observable<Habit[]> {
    // return of(this.habits);
    return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(newHabit: any) {
    console.log('addHabit', newHabit);
    // const id = this.habits.length + 1;
    // newHabit.id = id;
    // this.habits.push(newHabit);
    return this.http
      .post('/api/habits', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
