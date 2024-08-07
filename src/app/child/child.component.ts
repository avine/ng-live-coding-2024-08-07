import { Component, inject, ValueProvider } from '@angular/core';
import { AppService } from '../app.service';

const provideAppService = (): ValueProvider => ({
  provide: AppService,
  useValue: {
    value: 2,
  } satisfies AppService,
});

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  providers: [provideAppService()],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  appService = inject(AppService);
}
