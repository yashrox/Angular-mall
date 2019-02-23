import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {boycloth} from '../../boycloth.services'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private boyser : boycloth) { }

  ngOnInit() {
  }
        
          register(formvalue : NgForm){
            console.log(formvalue);
            const email = formvalue.value.mail;
            const password = formvalue.value.password;
            this.boyser.register(email , password);
          }
    
  
  
}
