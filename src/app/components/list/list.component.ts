import { Component, OnInit } from '@angular/core';

const items = [
  {id: 1, name: "first", price: 10},
  {id: 2, name: "second", price: 20},
  {id: 3, name: "third", price: 30},
]
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
 
  listItems: any[];
  ngOnInit() {
    this.listItems = items;
  }

}
