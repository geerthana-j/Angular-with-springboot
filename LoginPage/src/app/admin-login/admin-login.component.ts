import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  Admin = '';
  func(val : string){
    this.Admin = "admin logging in..."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
