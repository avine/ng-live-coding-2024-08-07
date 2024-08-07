import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  ClassProvider,
  FactoryProvider,
  provideZoneChangeDetection,
  ValueProvider,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { firstValueFrom, tap } from 'rxjs';
import { routes } from './app.routes';
import { AppService } from './app.service';
import { TITLE } from './app.token';
import { TodoService } from './todo.service';

const appInit1Provider: ValueProvider = {
  provide: APP_INITIALIZER,

  useValue: (): Promise<unknown> =>
    new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    }),

  multi: true,
};

const appInit2Provider: FactoryProvider = {
  provide: APP_INITIALIZER,
  useFactory: (httpClient: HttpClient, todoService: TodoService) => (): Promise<unknown> =>
    firstValueFrom(
      httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(tap((todo) => (todoService.todo = todo))),
    ),
  deps: [HttpClient, TodoService],
  multi: true,
};

const appServiceProvider: ClassProvider = {
  provide: AppService,
  useClass: AppService,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),

    provideHttpClient(withFetch()),

    appServiceProvider,

    appInit1Provider,
    appInit2Provider,

    {
      provide: TITLE,
      useValue: 'Hello world!',
    },
  ],
};
