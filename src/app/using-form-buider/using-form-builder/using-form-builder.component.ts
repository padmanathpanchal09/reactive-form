import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-using-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,RouterOutlet],
  templateUrl: './using-form-builder.component.html',
  styleUrl: './using-form-builder.component.css'
})
export class UsingFormBuilderComponent {

 userForm!:FormGroup;

 constructor(private formBuilder:FormBuilder){
  this.userForm = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['',
      [
       Validators.required,
       Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
      ],
    ],
    address: this.formBuilder.group({
      street: ['',Validators.required],
      city: ['',Validators.required]
    }),
    phoneNumbers: this.formBuilder.array([
      this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])
    ])
  });
 }
 get phoneNumbers():FormArray{
  return this.userForm.get('phoneNumbers') as FormArray;
 }

 
 
 addPhoneNumbers(){
  this.phoneNumbers.push(
    this.formBuilder.control('',[
    Validators.required,
    Validators.pattern(/^\d{10}$/)
  ]));
 }

removePhoneNumber(index:number){
  this.phoneNumbers.removeAt(index);
}

 submitForm(){
  if(this.userForm.valid){
    console.log(this.userForm.value);
    
  }
 }

}
