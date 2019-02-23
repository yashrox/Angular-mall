import { Component, OnInit } from '@angular/core';
import {boycloth} from  '../boycloth.services';
import {clothmodel} from  '../cloth.model' ;
import {NgForm} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-boycloth',
  templateUrl: './boycloth.component.html',
  styleUrls: ['./boycloth.component.css']
})
export class BoyclothComponent implements OnInit {

  constructor( private boycloths : boycloth  , private router : Router ) { }
  boyarr : clothmodel[]
  search : string = " "
  
  
  
  ngOnInit() {
      this.boyarr = this.boycloths.getboy();
      this.boycloths.arrchange.subscribe((clotharr : clothmodel[] ) => {
        this.boyarr = clotharr;
      })
  }

  newval(){
    
    if(this.boycloths.isAuthenticated()){
      alert(" READ :  'form is created at BOTTOM* ; enter details'");
    }else{
      confirm(" YOU ARE NOT ALLOWED; PLEASE LOGIN FIRST ");
      this.router.navigate(['/signin']) ;
    }
    
  }
  
  
}
