import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-using-form-group',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,RouterOutlet,NgIf],
  templateUrl: './using-form-group.component.html',
  styleUrl: './using-form-group.component.css'
})
export class UsingFormGroupComponent {

  usersArray:any[] = [];

  userForm:FormGroup = new FormGroup({
    id:new FormControl('0',[Validators.required,Validators.maxLength(10)]),
    name: new FormControl('',[Validators.required,Validators.maxLength(100)]),
    username: new FormControl(''),
    email: new FormControl(''),
    
  });

  constructor(private http:HttpClient){
    this.getAllUser();
  }

  // get all the user
  getAllUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      
      this.usersArray= res;
    })
  }

  saveUser(){
    const obj = this.userForm.value;
    console.log(obj);
    this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe((res:any)=>{
      alert("User Created")
    }) 
    
  }
  onEdit(id:number){
    this.http.get('https://jsonplaceholder.typicode.com/users/'+id).subscribe((res:any)=>{
      this.userForm = new FormGroup({
        id:new FormControl(res.id),
        name: new FormControl(res.name),
        username: new FormControl(res.username),
        email: new FormControl(res.email),
        
      });
    })
  }


}
