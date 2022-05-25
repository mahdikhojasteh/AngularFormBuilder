import { Component, Input, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  @Input() fieldModel!: FieldModel;

  constructor() {}

  ngOnInit(): void {}
}
