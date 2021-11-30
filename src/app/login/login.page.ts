import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../create-user/model/user-model';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: string;
  password: string;

  users: User[] = [];
  isUserValid: boolean = false;

  id: string;


  constructor(
    private route: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  toLogin(){
    this.validateUser();
    if(!this.isUserValid){
      alert("Usuário ou Senha inválido!");
      this.cleanInputs();
    }else{
      alert("Usuário Validado!");
      this.goToDashboard();
    }
  }

  validateUser(){
    this.users.forEach(us => {
      this.prepareInputsIgnoreCase();
      if(us.login.toLowerCase() == this.login && us.password.toLowerCase() == this.password){
        this.isUserValid = true;
        this.id = us.id;
        window.sessionStorage.setItem("userLogin", JSON.stringify(us));
        return;
      }
    });
  }

  prepareInputsIgnoreCase(){
    this.login = this.login.toLowerCase();
    this.password = this.password.toLowerCase();
  }

  cleanInputs(){
    this.login = '';
    this.password = '';
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((val:any) => this.users = val);
  }

  goToCreateUser(){
    this.route.navigate(['/create-user']);
  }

  goToDashboard(){
    this.route.navigate(['/dashboard']);
  }

}
