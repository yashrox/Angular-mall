import { Component, OnInit } from '@angular/core';
import {boycloth} from '../clothes/boycloth.services'


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private boyser : boycloth) { }

  show : boolean
 
  ngOnInit() {
  
  
    
  }
  
   
  
    onsave(){
      this.boyser.onput().subscribe(response  => console.log(response));
    }

    onget(){
      this.boyser.onget() ;
    }
  
    logout(){
        this.boyser.logout();
    }
  
}
