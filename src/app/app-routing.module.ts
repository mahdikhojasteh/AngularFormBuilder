import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormPreviewComponent } from './components/form-preview/form-preview.component';

const routes: Routes = [
  { path: 'builder', component: FormBuilderComponent },
  { path: 'preview', component: FormPreviewComponent },
  { path: '**', redirectTo: 'builder', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
