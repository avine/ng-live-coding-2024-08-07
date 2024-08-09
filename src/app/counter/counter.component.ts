import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: '<button class="btn" (click)="increment()">{{ count }}</button>',
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  protected increment() {
    this.count += 1;
    this.countChange.emit(this.count);
  }
}
