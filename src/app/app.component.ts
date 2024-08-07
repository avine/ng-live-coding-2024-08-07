import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortPipe } from './sort/sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SortPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fruits = ['pommes', 'bananes'];

  add() {
    this.fruits.push('kiwi');
    //this.fruits = [...this.fruits, 'kiwi'];
  }
}
