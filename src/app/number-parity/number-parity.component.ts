import { Component, inject } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { NumberParityService } from './number-parity.service';

@Component({
  selector: 'app-number-parity',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <app-counter [(count)]="count" />
    <span>{{ count % 2 ? 'is odd' : 'is even' }}</span>
  `,
})
export class NumberParityComponent {
  count = 4;

  private numberParityService = inject(NumberParityService);
}
