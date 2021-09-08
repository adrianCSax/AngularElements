import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isPressedArray!: boolean[];

  constructor(private injector: Injector) {
   }

  ngOnInit(): void {
    this.isPressedArray = [true, false, false];
  }


  isItActive(position: number) {
    return this.isPressedArray[position];
  }

  isPressed(event: any) {
    const position = event.target.id;
    this.isPressedArray.forEach((_element, index) => {
      this.isPressedArray[index] = (index === parseInt(position));
    });
  }

}
