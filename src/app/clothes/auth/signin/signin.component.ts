import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {boycloth} from '../../boycloth.services';
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private boyser : boycloth , private router : Router) { }

  ngOnInit() {
  }

    signin(formvalue : NgForm){
      const email = formvalue.value.mail;
      const password = formvalue.value.password
      this.boyser.login(email,password);
      this.router.navigate(['/boyscloth'])
    }

}
