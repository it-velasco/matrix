import { Component, OnInit } from '@angular/core';
import { Translation } from '../translations/tranlation';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  lang: string | undefined;

  //translations: 
  title: string | undefined;
  contact: string | undefined;
  titleServices: string | undefined;


  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'de';
    this.translate();
  }



  translate() {
    const translated = new Translation();

    if (this.lang == 'en') {
      this.title = translated.title[1];
      this.contact = translated.contact[1];
      this.titleServices = translated.titleServices[1];
    } else if (this.lang == 'es') {
      this.title = translated.title[2];
      this.contact = translated.contact[2];
      this.titleServices = translated.titleServices[2];
    } else {
      this.title = translated.title[0];
      this.contact = translated.contact[0];
      this.titleServices = translated.titleServices[0];
    }
  }

  


}
