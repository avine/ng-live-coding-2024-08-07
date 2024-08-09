import { AfterViewInit, Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // console.log(this.counterComponent.get(0)?.count());
    // console.log(this.counterComponent.get(1)?.count());

    console.log(this.counterComponent()?.count());
  }

  // @ViewChildren(CounterComponent) counterComponent!: QueryList<CounterComponent>;

  counterComponent = viewChild(CounterComponent);

  appCount = 55;
}
