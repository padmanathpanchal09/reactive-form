import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators,} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {

  userForm:FormGroup;
  isFormSubmitted:boolean =true


  constructor(){
    
    this.userForm =  new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.maxLength(100)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      username: new FormControl('',[Validators.required,Validators.email]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl(''),
      zipCode: new FormControl('')
    });
  }


  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.isFormSubmitted =true
      
    }
  }
}
