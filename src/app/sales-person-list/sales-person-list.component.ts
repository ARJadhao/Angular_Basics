import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create array of objects
  salesPersonList: SalesPerson[] = [

    new SalesPerson('Ashish','Jadhao','aj@xyz.com',70000),
    new SalesPerson('James','Bond','jb@xyz.com',90000),
    new SalesPerson('Bruce','Banner','bb@xyz.com',100000),
    new SalesPerson('Peter','Parker','pp@xyz.com',150000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
