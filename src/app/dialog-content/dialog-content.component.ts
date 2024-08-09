import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.scss',
})
export class DialogContentComponent {}
