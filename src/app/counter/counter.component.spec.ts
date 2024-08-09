import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 0', () => {
    expect(component.count).toBe(0);

    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(button).not.toBeNull();

    expect(button?.textContent).toContain(0);
  });

  it('should increment when clicking', () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();

    expect(component.count).toBe(1);

    fixture.detectChanges();
    expect(button?.textContent).toContain(1);
  });

  it('should emit output with the current count when clicking', (done) => {
    component.countChange.subscribe((count) => {
      expect(count).toBe(1);
      done();
    });

    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();
  });

  it('should emit output with the current count when clicking (v2)', () => {
    const countChangeSpy = spyOn(component.countChange, 'emit');

    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button?.click();

    expect(countChangeSpy).toHaveBeenCalledWith(1);
  });
});
