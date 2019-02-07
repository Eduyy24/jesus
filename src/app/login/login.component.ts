import { Component, OnInit } from '@angular/core';

import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  pass:string;
  x=true;

  constructor( private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }
  
  login(): void {
    this.auth.emailLogin(this.email, this.pass)
    .then((user)=>{
     this.autentificar();
    })
    .catch(error=>{
     this.autentificar();
    })
  }
  


  autentificar(){
   var z = this.auth.authenticated;
   console.log(z);
   if(z){

     this.router.navigate(['/']);
   }else{
     this.x = z;
   }
 }
}
