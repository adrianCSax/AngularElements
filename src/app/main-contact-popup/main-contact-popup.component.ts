import { Component, OnInit, Input, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'app-main-contact-popup',
  templateUrl: './main-contact-popup.component.html',
  styleUrls: ['./main-contact-popup.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainContactPopupComponent implements OnInit {

  @Input() namelabel: string;
  @Input() lastnamelabel: string;
  @Input() countries: string [];
  @Input() countrylabel: string;
  @Output() formObject: any;
  lastname: string;
  name: string;
  countryselected: any;
  subjectvalue: string;


  constructor() { 
    this.namelabel = "Name";
    this.name = "";
    this.lastnamelabel = "Last Name";
    this.lastname = "";
    this.countries = ["Spain", "USA", "Austria", "Netherlands", "United Kingdom"];
    this.countrylabel = "Country";
    this.subjectvalue = "";
    this.countryselected = "";
  }

  ngOnInit(): void {
    console.log(this);
  }

  getInfo() {
    let object = {
      'name': this.name,
      'lastname': this.lastname,
      'country': this.countryselected,
      'subject': this.subjectvalue
    }
    console.log(object);
    this.formObject = object;
  }

}
