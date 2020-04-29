import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  
  }
  registrar(){

    console.log("asas")
    this.router.navigate(['/']);
      
  }
}
