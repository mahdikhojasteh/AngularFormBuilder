import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-save-form-dialog',
  templateUrl: './save-form-dialog.component.html',
  styleUrls: ['./save-form-dialog.component.scss'],
})
export class SaveFormDialogComponent implements OnInit {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() closeDialogWithData = new EventEmitter<string>();

  formName: string = '';

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeDialog.emit();
  }

  onRegister() {
    this.closeDialogWithData.emit(this.formName);
  }
}
