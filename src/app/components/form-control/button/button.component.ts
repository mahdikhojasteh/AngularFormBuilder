import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() fieldModel!: FieldModel;
  @Output() buttonClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  clicked() {
    this.buttonClicked.emit(this.fieldModel.value);
  }
}
