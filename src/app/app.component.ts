import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UsingFormGroupComponent } from './using-form-group/using-form-group/using-form-group.component';
import { UsingFormBuilderComponent } from './using-form-buider/using-form-builder/using-form-builder.component';
import { FormValidationComponent } from './formValidation/form-validation/form-validation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    UsingFormGroupComponent,
    RouterModule,
    UsingFormBuilderComponent,
    FormValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form';
}
