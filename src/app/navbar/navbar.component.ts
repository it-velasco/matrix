import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lang: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'de';
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
