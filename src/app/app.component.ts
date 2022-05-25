import { Component } from '@angular/core';
import { NavbarModel } from './models/navbar-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navbar_items: NavbarModel[];

  constructor() {
    this.navbar_items = [
      { id: 1, title: 'form builder', link: '', isActive: true },
      { id: 2, title: 'preview', link: 'preview', isActive: false },
    ];
  }

  navbar_clk(id: number) {
    this.navbar_items.map((e) => (e.isActive = false));
    let found = this.navbar_items.find((e) => e.id == id);
    if (found) {
      found.isActive = true;
    }
  }
}
