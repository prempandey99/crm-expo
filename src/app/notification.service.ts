import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      // panelClass: ['error-snackbar']
      // panelClass: ['error-snackbar-dark']
      // panelClass: ['error-snackbar-red']
      panelClass: ['error-snackbar-blue']
    });
  }
}
