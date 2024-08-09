import { afterNextRender, afterRender, Component, computed, effect, model, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = model(0);

  info = output<string>();

  double = computed(() => this.count() * 2);

  constructor() {
    afterNextRender(() => {
      console.log('next render');
    });

    afterRender(() => {
      console.log('every render');
    });

    effect(() => {
      console.log('effect', this.count());
    });

    setInterval(() => {
      console.log('interval');
      this.increment();
    }, 2000);

    this.info.emit('Coucou');
  }

  increment() {
    this.count.update((count) => count + 1);
  }
}
