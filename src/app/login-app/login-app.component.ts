import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { $ } from 'protractor';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  isVisibleLogin: boolean = true;
  isVisibleRegister : boolean = false;
   
  
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
   
  }
  public async login()
  {
    //Login Code with DB connectivity
  //   var userName= ((document.getElementById("userName") as HTMLInputElement).value);
  //   var userPassword = ((document.getElementById("userPassword") as HTMLInputElement).value);

  //   var header = new HttpHeaders();
  //   header.append('Content-Type','application/x-www-form-urlencoded');

  //     const params = new HttpParams()
  //     .set('username', userName)
  //     .set('password', userPassword);
    
  //   await this.http.get<loginusers>("http://localhost:3000/api/Login", {headers: header, params: params}).subscribe(data=>
  //   {
  //     if(userName==data.username && userPassword==data.password)
  //     {
  //         alert("Login Successfully")
  //     }
  //     else
  //     {
  //       alert("user name or password in incorrect")
  //     }
  //   }
  //  );

  }
  public async RegisterUser()
  {
    // var regUserName = ((document.getElementById("regUserName") as HTMLInputElement).value);
    // var regUserPassword = ((document.getElementById("regUserPassword") as HTMLInputElement).value);
    // var regUserConfirmPassword = ((document.getElementById("regUserConfirmPassword") as HTMLInputElement).value);
    // if(regUserPassword!=regUserConfirmPassword)
    // {
    //   alert("Password and confirm password is not same");
    // }
    // else
    // {
    //   var header = new HttpHeaders();
    //    header.append('Content-Type','application/x-www-form-urlencoded');

    //   const params = new HttpParams()
    //   .set('username', regUserName)
    //   .set('password', regUserPassword);
    
    //   await this.http.get("http://localhost:3000/api/Register", {headers: header, params: params}).subscribe(data=>console.log(data));
    // }
    
  }

  public Register()
  {
    this.RegisterTab();
  }

  public Login()
  {
    alert("Login");
  }
  public Cancel()
  {
    this.LoginTab();
  }
  public LoginWithSSO()
  {
    alert("PKI Login");
  }
  public LoginTab()
  {
    this.isVisibleRegister = false;
    this.isVisibleLogin = true;
  }
  public RegisterTab()
  {
    this.isVisibleLogin = false;
    this.isVisibleRegister = true;
  }
}
