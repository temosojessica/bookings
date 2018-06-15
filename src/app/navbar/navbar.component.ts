import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() name;
  @Input() page;
 
  @Input() fname;
  @Input() surname;
  @Input() age;
  @Input() date;

 
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.fname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
   
  }


 navigator() {

  if  (this.name === 'event') {
    this.router.navigate(['detail/event'])
  } else if (this.name==='view'){
    this.router.navigate(['detail/view'],{queryParams: {fname:this.fname,surname:this.surname,age:this.age,date:this.date}})
  }
}
}