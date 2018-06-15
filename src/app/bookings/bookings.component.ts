import { Component, OnInit, } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  fname;
  surname;
  age;
  date;

  constructor(private router: Router) { }

  ngOnInit() {
  
  }
  onlogin() {
     console.log(this.fname);
    console.log(this.surname);
    console.log(this.age);
    console.log(this.date);
   
    this.router.navigate(['detail'],{queryParams: {name:this.fname , surname: this.surname, age: this.age , date:this.date}});
  }  
}

