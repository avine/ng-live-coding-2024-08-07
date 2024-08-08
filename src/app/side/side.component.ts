import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss',
})
export class SideComponent {
  get tick() {
    console.log('Tick: Side');
    return 'App';
  }

  data = 5;
}
