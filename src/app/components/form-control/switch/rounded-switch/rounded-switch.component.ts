import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rounded-switch',
  templateUrl: './rounded-switch.component.html',
  styleUrls: ['./rounded-switch.component.scss'],
})
export class RoundedSwitchComponent implements OnInit {
  @Input() switch_value: boolean = false;
  @Input() switch_label: string = '';
  @Output() switch_onChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggle_switch() {
    this.switch_value = !this.switch_value;
    this.switch_onChange.emit(this.switch_value);
  }
}
