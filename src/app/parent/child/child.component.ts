import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnDestroy {
  changeDetectorRef = inject(ChangeDetectorRef);

  @Input() data = 1;

  get tick() {
    console.log('Tick: Child');
    return 'App';
  }

  count = 0;

  interval = setInterval(() => {
    this.count++;
    console.log(this.count);
    this.changeDetectorRef.markForCheck();
  }, 10000);

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
