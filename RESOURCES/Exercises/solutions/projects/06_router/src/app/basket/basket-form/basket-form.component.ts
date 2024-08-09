import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './basket-form.component.html',
  styleUrl: './basket-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketFormComponent {
  @Output() checkout = new EventEmitter<unknown>();

  protected formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    adress: new FormControl(''),
    creditCard: new FormControl(''),
  });
}
