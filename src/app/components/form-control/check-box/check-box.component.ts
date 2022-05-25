import { Component, Input, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {
  @Input() fieldModel!: FieldModel;
  constructor() {}

  ngOnInit(): void {}

  checkSelection(key: string) {
    if (this.fieldModel.value.includes(key)) {
      let valueList = [...this.fieldModel.value];
      valueList.splice(valueList.indexOf(key), 1);
      this.fieldModel.value = [...valueList];
    } else {
      this.fieldModel.value = [...this.fieldModel.value, key];
    }
  }
}
