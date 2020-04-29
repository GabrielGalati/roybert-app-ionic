import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  
  }
  registrar(){

    console.log("asas")
    this.router.navigate(['/']);
      
  }
}
