import { Component, OnInit, Input, ViewEncapsulation, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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
  @Output() formObject: EventEmitter<any>;
  lastname: string;
  name: string;
  countryselected: any;
  subjectvalue: string;


  constructor() { 
    this.namelabel = "name";
    this.name = "";
    this.lastnamelabel = "lastname";
    this.lastname = "";
    this.countries = ["Spain", "USA", "Austria", "Netherlands", "United Kingdom"];
    this.countrylabel = "Country";
    this.subjectvalue = "";
    this.countryselected = "";
    this.formObject = new EventEmitter<any>();
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
    };
    return this.formObject.emit(object);
  }
}
