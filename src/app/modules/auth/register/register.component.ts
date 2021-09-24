import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input('userData') userData: {[key: string]: any};
  registerForm: FormGroup;
  isPasswordInvalid= true;
  passwords={
    password: '',
    confirmPassword:'',
  }
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log(this.userData);
    this.isPasswordInvalid= true;
    this.buildForm();
  }

  buildForm(){
    this.registerForm= this.formBuilder.group({
      email: [''],
      mobileNumber: [''],
      collegeName: [''],
      password: [''],
    });
  }
  onSubmitForm(){
    console.log(this.registerForm);

  }
  passwordChange(event){
    console.log(event);
    this.passwords[event.target.name]= event.target.value;
    if(this.passwords.password !='' && this.passwords.password === this.passwords.confirmPassword){
      this.isPasswordInvalid= false;
    }else{
      this.isPasswordInvalid = true;
    }
  }

}
