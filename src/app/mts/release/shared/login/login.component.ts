import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser: boolean = true;
  name: string = "";
  password: string = "";
  newUser: any = { name: this.name, role: this.password };

  constructor(private route: Router, private formBuilder: FormBuilder, private auth: AuthService ) {
    this.loginUser = true;

  }

  ngOnInit(): void {

  }
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }
  Next() {

    //debugger;
    // console.log(this.name , " name is this");
    // // let loginRequest : Object ={
    // //   "userName": this.name,
    // //   "password": this.password
    // // }
    // // console.log(loginRequest, " Obj is this");
    // this.auth.doLogin(this.password).subscribe(
    //   (response: any) => {
    //     //debugger
    //     console.log(response);
        // if (this.password != response[0].password) {
        //   alert("Inavlid username or password");

        // }
        // else {
          if (this.name=="NCC01234" )
          {
            this.route.navigate(['/main']);
            this.loginUser = false;
          }

          else {
            alert("Inavlid username or password");
          }
         
        // }
    //   }
    //   ,
    //   (errorResponse: HttpErrorResponse) => {
    //     console.log(errorResponse.message);
    //     alert("Inavlid username or password");
    //   }
    // )
  }
  goPost() {
    this.auth.getLogin(this.name);

    // ((data:any ) => this.newUser.push(data));
  }
}
