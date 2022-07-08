import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"name":"rahul","age":45,"photo":"http://www.awesomeindia.in/wp-content/uploads/2015/11/Shahrukh-Khan4.jpg"},
    {"name":"rajan","age":45,"photo":"https://tse1.mm.bing.net/th?id=OIP.8BP_GfOBfgwu4b6ZUgHQDwHaHa&pid=Api&P=0&w=155&h=155"},
    {"name":"anoop","age":20,"photo":"https://tse3.mm.bing.net/th?id=OIP.Irb4VBuyBRS42cVHtpC-ugHaEK&pid=Api&P=0&w=279&h=157"},
    {"name":"jayan","age":40,"photo":"https://english.cdn.zeenews.com/sites/default/files/2018/05/17/687182-salman2why43.gif"},
    {"name":"unni","age":23,"photo":"https://i.redd.it/laxumc1atdv31.png"},
    {"name":"raju","age":34,"photo":"https://indianmemetemplates.com/wp-content/uploads/salman-radhe-sad-crying-tere-naam.jpg"}
  ]

}
