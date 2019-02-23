import { Component, OnInit } from '@angular/core';
import {boycloth} from '../../boycloth.services' ;
import {clothmodel} from '../../cloth.model' ;
import {ActivatedRoute , Params} from '@angular/router'

@Component({
  selector: 'app-boyid',
  templateUrl: './boyid.component.html',
  styleUrls: ['./boyid.component.css']
})
export class BoyidComponent implements OnInit {
  
  id : number 
  edit : boolean  = false ;
  boydata : clothmodel
  constructor(private boyser : boycloth , private route : ActivatedRoute) { }

  ngOnInit() {
        this.route.params.subscribe((param : Params) => {
          this.id = +param['id']
          this.boydata = this.boyser.expandvalue(this.id) ;
          console.log(this.id);
        })
    
  }

  valupdate(){
    this.edit = true ;
  }
  
  ondelete(){
    this.boyser.onchange(this.id);
  }
  
}
