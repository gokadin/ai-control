import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'new-project-dialog',
  templateUrl: 'newProjectDialog.html',
  styleUrls: ['newProjectDialog.css']
})
export class NewProjectDialog {
  constructor(
    public dialogRef: MatDialogRef<NewProjectDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
