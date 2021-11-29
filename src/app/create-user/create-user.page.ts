import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  constructor(private route: Router) {
  }

  name: string;
  date: Date;
  weight: number;
  height: number;
  email: string;
  login: string;
  password: string;

  ngOnInit() {}

  setName(element) {
    this.name = element;
  }

  setDate(element) {
    this.date = element;
  }

  setWeight(element) {
    this.weight = element;
  }

  setHeight(element) {
    this.height = element;
  }

  setEmail(element) {
    this.email = element;
  }

  setLogin(element) {
    this.login = element;
  }

  setPassword(element) {
    this.password = element;
  }

  goToLogin() {
    this.route.navigate(['/login']);
  }

  createUser(){
    let user = {
      "name": this.name,
      "email": this.email,
      "login": this.login,
      "password": this.password,
      "date": this.date,
      "weight": this.weight,
      "height": this.height
    }
    console.log(user);
  }
}
