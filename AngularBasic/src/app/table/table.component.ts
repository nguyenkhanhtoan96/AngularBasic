import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hienID;hienTen;hienKhoa;vitri:string;
  a:any;
  people:any[]=[
    {
      "id":"1",
      "name":"Kha",
      "khoa":"6"
    },
    {
      "id":"2",
      "name":"Toan",
      "khoa":"6"
    },
    {
      "id":"3",
      "name":"Thuy",
      "khoa":"5"
    },
    {
      "id":"4",
      "name":"Manh",
      "khoa":"5"
    }
  ]

  getIndex(index){
    alert(index);
  }

  deleteIndex(index) {
    this.people.splice(index, 1);
  }

  hienThongTin(index){
    this.vitri=index;
    this.hienID=this.people[index].id
    this.hienTen=this.people[index].name
    this.hienKhoa=this.people[index].khoa
  }

  editInfor(id,name,khoa){
    this.people[this.vitri].id=id
    this.people[this.vitri].name=name
    this.people[this.vitri].khoa=khoa
  }

  hientest(id,name,khoa){
    alert('id : '+id+' ;name : '+name+' ;khoa : '+khoa)
  }

  themNguoi(id,name,khoa){
    this.a={"id":id,"name":name,"khoa":khoa};
    this.people.push(this.a);
  }
}
