import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FieldTypeEnum } from 'src/app/models/enums/field-type-enum';
import { FieldModel } from 'src/app/models/field-model';
import { FormModel } from 'src/app/models/form-model';
import { addForm } from 'src/app/state/form-state/form.actions';
import { selectForm } from 'src/app/state/form-state/form.selectors';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  formModel: FormModel;
  fieldTypeEnum = FieldTypeEnum;
  selectedField: FieldModel | null = null;
  isForEdit: boolean = false;
  isForSave: boolean = false;

  constructor(
    private store: Store,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.formModel = new FormModel();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (data) => {
        if (!!data?.['id']) {
          let id = data?.['id'];
          let _formModel = this.store.select(selectForm(id));
          _formModel.subscribe({
            next: (data) => {
              if (data) {
                this.formModel = JSON.parse(JSON.stringify(data));
              }
            },
          });
        }
      },
    });
  }

  addField(fieldType: FieldTypeEnum) {
    switch (fieldType) {
      case this.fieldTypeEnum.textbox:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;
      case this.fieldTypeEnum.textarea:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;
      case this.fieldTypeEnum.button:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;
      case this.fieldTypeEnum.select:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;
      case this.fieldTypeEnum.radio:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;
      case this.fieldTypeEnum.datepicker:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;
      case this.fieldTypeEnum.checkbox:
        this.formModel.form_fields = [
          ...this.formModel.form_fields,
          new FieldModel(fieldType),
        ];
        break;

      default:
        break;
    }
  }

  reset() {
    this.selectedField = null;
    this.formModel.form_fields = [];
  }

  save() {
    this.isForSave = true;
  }

  saveAndRedirect(formName: string) {
    this.formModel.form_name = formName;
    this.store.dispatch(addForm(this.formModel));
    this.router.navigate(['preview']);
    this.isForSave = false;
  }

  selectRow(formField: FieldModel) {
    if (this.selectedField && this.selectedField.id == formField.id) {
      this.selectedField = null;
    } else {
      this.selectedField = formField;
    }
  }

  deleteSelected() {
    if (this.selectedField) {
      let found = this.formModel.form_fields.find(
        (e) => e.id == this.selectedField!.id
      );
      if (found) {
        this.formModel.form_fields.splice(
          this.formModel.form_fields.indexOf(found),
          1
        );
      }
      this.selectedField = null;
    }
  }

  editSelected() {
    this.isForEdit = true;
  }

  updateField(formField: FieldModel) {
    let found = this.formModel.form_fields.find((e) => e.id == formField.id);
    if (found) {
      this.formModel.form_fields.splice(
        this.formModel.form_fields.indexOf(found),
        1,
        formField
      );
    }
    this.selectedField = null;
    this.isForEdit = false;
  }
}
