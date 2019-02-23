import { Component, OnInit } from '@angular/core';
import {FormArray , FormGroup , FormControl} from '@angular/forms'
import {clothmodel} from '../../cloth.model'
import { boycloth} from '../../boycloth.services'
import {Router} from '@angular/router'

@Component({
  selector: 'app-newcloth',
  templateUrl: './newcloth.component.html',
  styleUrls: ['./newcloth.component.css']
})
export class NewclothComponent implements OnInit {

  constructor(private boyser :  boycloth , private  routes : Router ) {}
  
  newcloth : FormGroup
  newarr : clothmodel[]
  
  ngOnInit() {
        this.newcloth = new FormGroup({
          cloth : new FormArray([
                      new FormGroup({
              'brand' : new FormControl(),
              'image' : new FormControl(),
              'description' : new FormControl(),
              price : new FormControl()
            })  ])
        })
 console.log(this.newcloth);             
}
  
  addmore(){
    (<FormArray>this.newcloth.get('cloth')).push(this.add());
    this.edit = true ;
    
  }
  
    add() : FormGroup {
    return   new FormGroup({
              'brand' : new FormControl(),
              'image' : new FormControl(),
              'description' : new FormControl(),
              price : new FormControl()
            })
    }
   
   edit = false
  
    
  onsub(){
     this.newarr = this.newcloth.get('cloth').value;
     console.log(this.newarr);
     this.boyser.boynew(this.newarr);
    this.routes.navigate(['boyscloth']) ;
  }  

  subdelete(index : number){
    (<FormArray>this.newcloth.get('cloth')).removeAt(index);
  }
  
}
