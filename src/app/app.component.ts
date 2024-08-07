import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { TITLE } from './app.token';
import { ChildComponent } from './child/child.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appService = inject(AppService);

  todoService = inject(TodoService);

  title = inject(TITLE);

  // constructor(@Inject(TITLE) public title: string) {}
}
