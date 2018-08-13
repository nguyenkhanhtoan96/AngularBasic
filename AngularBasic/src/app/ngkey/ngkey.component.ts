import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngkey',
  templateUrl: './ngkey.component.html',
  styleUrls: ['./ngkey.component.css']
})
export class NgkeyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //ngIf
  show:boolean=true;
  //ngFor
  title="Cac thang";
  month=['thang mot','thang hai','thang ba','thang tu','thang nam'];
  //ngSwitchCase
  people:any[]=[
    {
      "name":"nguyen van a",
      "age":"21",
      "tp":"hcm"
    },{
      "name":"nguyen van b",
      "age":"22",
      "tp":"ha noi"
    },{
      "name":"nguyen van c",
      "age":"23",
      "tp":"da nang"
    },{
      "name":"nguyen van d",
      "age":"24",
      "tp":"vung tau"
    },{
      "name":"nguyen van e",
      "age":"21",
      "tp":"vung tau"
    },{
      "name":"nguyen van e",
      "age":"23",
      "tp":"vung tau"
    }
  ];
  //ngStyle
  getColor(age){
    switch (age) {
      case '21':
        return 'red';
      case '22':
        return 'green';
      case '23':
        return 'orange';
      case '24':
        return 'violet';
    }
  }
  //ngClass
  
}
