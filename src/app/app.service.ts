import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  // ---- La donnée brut

  count = 1;

  increment() {
    this.count += 1;
  }

  // ---- La donnée observable

  private _count2$ = new BehaviorSubject<number>(1);

  count2$ = this._count2$.asObservable();

  increment2() {
    this._count2$.next(this._count2$.value + 1);
  }

  // ---- La donnée sous forme de signal

  private _count3 = signal(1);

  count3 = this._count3.asReadonly();

  increment3() {
    this._count3.update((count3) => count3 + 1);
  }
}
