import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { TextBoxComponent } from './components/form-control/text-box/text-box.component';
import { TextAreaComponent } from './components/form-control/text-area/text-area.component';
import { ButtonComponent } from './components/form-control/button/button.component';
import { SelectComponent } from './components/form-control/select/select.component';
import { RadioComponent } from './components/form-control/radio/radio.component';
import { DatePickerComponent } from './components/form-control/date-picker/date-picker.component';
import { FormsModule } from '@angular/forms';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';
import { CheckBoxComponent } from './components/form-control/check-box/check-box.component';
import { StoreModule } from '@ngrx/store';
import { metaReducerLocalStorage, reducers } from './state';
import { SquaredSwitchComponent } from './components/form-control/switch/squared-switch/squared-switch.component';
import { RoundedSwitchComponent } from './components/form-control/switch/rounded-switch/rounded-switch.component';
import { EditFieldDialogComponent } from './components/form-builder/edit-field-dialog/edit-field-dialog.component';
import { SaveFormDialogComponent } from './components/form-builder/save-form-dialog/save-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    TextBoxComponent,
    TextAreaComponent,
    ButtonComponent,
    SelectComponent,
    RadioComponent,
    DatePickerComponent,
    FormPreviewComponent,
    CheckBoxComponent,
    RoundedSwitchComponent,
    SquaredSwitchComponent,
    EditFieldDialogComponent,
    SaveFormDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers: [metaReducerLocalStorage] }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
