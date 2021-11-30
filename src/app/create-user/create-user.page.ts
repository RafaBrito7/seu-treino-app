import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { User } from './model/user-model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  constructor(private route: Router, private userService: UserService) {
  }

  user:User = {
    id: '',
    name: '',
    date: undefined,
    weight: 0,
    height: 0,
    email: '',
    login: '',
    password: ''
  };

  name: string;
  date: Date;
  weight: number;
  height: number;
  email: string;
  login: string;
  password: string;

  ngOnInit() {}

  setName(element) {
    this.user.name = element;
  }

  setDate(element) {
    this.user.date = element;
  }

  setWeight(element) {
    this.user.weight = element;
  }

  setHeight(element) {
    this.user.height = element;
  }

  setEmail(element) {
    this.user.email = element;
  }

  setLogin(element) {
    this.user.login = element;
  }

  setPassword(element) {
    this.user.password = element;
  }

  /*
  setId(){
    const crypto = require('crypto');
    this.user.id = crypto.randomUUID();
  }
  */

  goToLogin() {
    this.route.navigate(['/login']);
  }

  createUser(){
    this.prepareObjectToCreate();
    this.userService.createUser(this.user);
    this.goToLogin();
  }

  prepareObjectToCreate(){
    this.setName(this.name);
    this.setDate(this.date);
    this.setWeight(this.weight);
    this.setHeight(this.height);
    this.setEmail(this.email);
    this.setLogin(this.login);
    this.setPassword(this.password);
    //this.setId();
  }
}
