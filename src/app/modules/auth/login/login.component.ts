import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { STUDENT, TEACHER } from 'src/app/core/constants/storage.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('userForm',{static: true}) formRef: NgForm;
  studentUser= STUDENT;
  teacherUser= TEACHER;
  isLoginOpen= true;
  isUserRegister= false;
  proceed= false;
  registerData: {
    type: string,
    fullName: string,
    gender: string,
  };
  constructor() { }

  ngOnInit(): void {
    this.registerData={
      type: null,
      fullName: '',
      gender: '',
    }
  }

  submitForm(){
    console.log(this.registerData);
    this.isUserRegister= true;
  }

  changeForm(){
    this.isLoginOpen= ! this.isLoginOpen;
    if(this.isLoginOpen){
      this.isUserRegister = false;
    }
  }

}
