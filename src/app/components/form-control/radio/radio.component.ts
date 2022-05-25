import { Component, Input, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() fieldModel!: FieldModel;
  constructor() {}

  ngOnInit(): void {}
}
