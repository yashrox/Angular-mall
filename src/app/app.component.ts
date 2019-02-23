import { Component , OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAgYpQYynLiiU8VLG0hUYSmS7f7CGfwwgo",
    authDomain: "angularmall.firebaseapp.com",
    })
  }
  
}
