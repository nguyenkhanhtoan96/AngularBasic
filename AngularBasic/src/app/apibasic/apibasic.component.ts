import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
// import {HttpModule} from '@angular/http'
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-apibasic',
  templateUrl: './apibasic.component.html',
  styleUrls: ['./apibasic.component.css'],
})


export class APIBasicComponent implements OnInit {
  arraySV:any;
  constructor(private http:Http) { 
    this.http.get("https://5b7f8492af5e5600144d5ece.mockapi.io/SVTable")
    .toPromise()
    .then(r=>r.json())
    .then(res=>{this.arraySV=res,console.log(this.arraySV)})
  }

  ngOnInit() {
  }

  load(){
    this.http.get("https://5b7f8492af5e5600144d5ece.mockapi.io/SVTable")
    .toPromise()
    .then(r=>r.json())
    .then(res=>{this.arraySV=res,console.log(this.arraySV)})
  }

  delete(index) {
    this.load();
    this.http.delete("https://5b7f8492af5e5600144d5ece.mockapi.io/SVTable/"+index)
    .toPromise();
  }
    // this.arraySV.splice(row_no,1)
    
}
