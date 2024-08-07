import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  protected appService = inject(AppService);

  // ---- La donnée brut avec un getter

  protected get count() {
    return this.appService.count;
  }

  protected increment() {
    this.appService.increment();
  }

  // ---- La donnée observable avec le AsyncPipe dans le template

  protected count2$ = this.appService.count2$;

  increment2() {
    this.appService.increment2();
  }

  // ---- La donnée observable avec takeUntilDestroyed

  protected count2bis?: number;

  constructor() {
    this.appService.count2$.pipe(takeUntilDestroyed()).subscribe((count2) => (this.count2bis = count2));
  }

  // ---- La donnée observable avec OnInit, OnDestroy et Subscription

  protected count2Ter?: number;

  private subscription?: Subscription;

  ngOnInit() {
    this.subscription = this.appService.count2$.subscribe((count2) => (this.count2Ter = count2));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // ---- La donnée sous forme de signal

  count3 = this.appService.count3;

  increment3() {
    this.appService.increment3();
  }
}
