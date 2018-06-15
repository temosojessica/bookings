import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  fname;
  surname;
  age;
  date;

  pages= [

    {name:'event',page:'event'},
    {name:'view',page: 'view'}
  ]
  constructor(private router: ActivatedRoute) { }

  
  ngOnInit() {
    this.router.queryParams.subscribe(params=> {
      this.fname = params['name'];
      this.surname = params['surname'];
      this.age = params['age'];
      this.date = params['date'];
     
    
    }); console.log(this.fname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
    
      
  }

}
