import { Component, OnInit , Input } from '@angular/core';
import {clothmodel }  from '../../cloth.model' ;

@Component({
  selector: 'app-boydisplay',
  templateUrl: './boydisplay.component.html',
  styleUrls: ['./boydisplay.component.css']
})
export class BoydisplayComponent implements OnInit {

  @Input('data') boydata : clothmodel 
  @Input() Index : number 
  
  constructor() { }

  ngOnInit() {
  }

  
  
}
