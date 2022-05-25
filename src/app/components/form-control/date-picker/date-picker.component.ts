import { Component, Input, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() fieldModel!: FieldModel;

  constructor() {}

  ngOnInit(): void {}
}
