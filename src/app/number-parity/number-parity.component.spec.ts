import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CounterComponent } from '../counter/counter.component';
import { NumberParityComponent } from './number-parity.component';
import { NumberParityService } from './number-parity.service';

describe('NumberParityComponent', () => {
  let component: NumberParityComponent;
  let fixture: ComponentFixture<NumberParityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberParityComponent],
      providers: [
        {
          provide: NumberParityService,
          useValue: {
            data: 66,
          },
        },
      ],
    })
      .overrideComponent(NumberParityComponent, {
        remove: {
          imports: [CounterComponent],
        },
        add: {
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(NumberParityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have service', () => {
    const s = TestBed.inject(NumberParityService);

    expect(s.data).toBe(66);
  });

  it('should bind count to the child component', () => {
    const de = fixture.debugElement.query(By.css('app-counter'));

    expect(de.properties['count']).toBe(4);
  });

  it('should be "odd" when child component emits', () => {
    expect((fixture.nativeElement as HTMLElement).querySelector('span')?.textContent).toContain('even');

    const de = fixture.debugElement.query(By.css('app-counter'));
    de.triggerEventHandler('countChange', 5);

    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('span')?.textContent).toContain('odd');
  });

  /*
  it('should bind count to the child component', () => {
    const de = fixture.debugElement.query(By.directive(CounterComponent));

    expect(de.componentInstance.count).toBe(4);
  });

  it('should be "odd" when child component emits', () => {
    expect((fixture.nativeElement as HTMLElement).querySelector('span')?.textContent).toContain('even');

    const counterComponent: CounterComponent = fixture.debugElement.query(
      By.directive(CounterComponent),
    ).componentInstance;

    counterComponent.countChange.emit(5);

    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('span')?.textContent).toContain('odd');
  });
  */
});
