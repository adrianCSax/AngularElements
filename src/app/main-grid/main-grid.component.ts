import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {

  items: number[];

  constructor() { 
    this.items = [1,2,3,4,5,6];
  }

  ngOnInit(): void {
  }

}
