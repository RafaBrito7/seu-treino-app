import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private route: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPhrase();
  }

  phrase: any = {};
  loadingPhrase: boolean = true;

  goToLogin() {
    this.route.navigate(['/login']);
  }

  setPhrase(value) {
    this.phrase = value;
  }

  setLoadingPhrase() {
    setTimeout(() => {
      this.loadingPhrase = false;
    }, 2000);
  }

  fetchPhrase() {
    fetch('./assets/phrases.json')
      .then((response: any) => {
        return response.json();
      })
      .then((json: any) => {
        let phrasesList = json;
        let phrase =
          phrasesList[Math.floor(Math.random() * phrasesList.length)];
        this.setPhrase(phrase);
        this.setLoadingPhrase();
      });
  }
}
