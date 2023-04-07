import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from './data';
import { Item } from './system';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  constructor() {}

  getSystemInfo(id: number): Observable<string> {
    return of(data[id - 1].info);
  }

  getSystemItems(id: number): Observable<Item[]> {
    return of(data[id - 1].items);
  }
}
