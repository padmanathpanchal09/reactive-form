import { Routes } from '@angular/router';
import { UsingFormGroupComponent } from './using-form-group/using-form-group/using-form-group.component';
import { AppComponent } from './app.component';
import { UsingFormBuilderComponent } from './using-form-buider/using-form-builder/using-form-builder.component';
import { FormValidationComponent } from './formValidation/form-validation/form-validation.component';

export const routes: Routes = [
    {
        path:"",
        component:UsingFormBuilderComponent
    },
    {
        path:"form-group",
        component:UsingFormGroupComponent
    },
    {
        path:"form-builder",
        component:UsingFormBuilderComponent
    },
    {
        path:"form-validator",
        component:FormValidationComponent
    }
];
