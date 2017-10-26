import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  data: {}
  @Input() site: string;

  constructor() { 
  }

  ngOnInit() {
    this.getSitio("http://localhost:8082/" + this.site);
  }

  getSitio(urlSitio: string) {
    axios.get(urlSitio)
    .then((res) => {
      this.data = res;
    }).catch((err) => {
      console.log('Error : ' +err);
    });
  }

}
