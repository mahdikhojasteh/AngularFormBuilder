import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormModel } from 'src/app/models/form-model';
import { deleteForm } from 'src/app/state/form-state/form.actions';
import { selectForms } from 'src/app/state/form-state/form.selectors';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent implements OnInit {
  $formModels: Observable<FormModel[]> | null = null;
  selectedFormModel: FormModel | null = null;

  constructor(private store: Store, private router: Router) {
    this.$formModels = this.store.select(selectForms);
  }

  ngOnInit(): void {}

  select(formModel: FormModel) {
    if (this.selectedFormModel && this.selectedFormModel.id == formModel.id) {
      this.selectedFormModel = null;
    } else {
      this.selectedFormModel = formModel;
    }
  }

  deleteSelected() {
    if (this.selectedFormModel) {
      this.store.dispatch(deleteForm({ form_id: this.selectedFormModel.id }));
      this.selectedFormModel = null;
    }
  }

  editSelected() {
    if (this.selectedFormModel) {
      this.router.navigate(['builder', { id: this.selectedFormModel.id }]);
      this.selectedFormModel = null;
    }
  }
}
