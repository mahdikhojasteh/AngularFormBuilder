import { Component, Input, OnInit } from '@angular/core';
import { FieldModel } from 'src/app/models/field-model';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent implements OnInit {
  @Input() fieldModel!: FieldModel;

  constructor() {}

  ngOnInit(): void {}
}
