import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params , Router} from '@angular/router'
import {clothmodel} from '../../../cloth.model'
import {FormGroup , FormControl , Validators }  from '@angular/forms'
//import {BoyidComponent} from '../boyid.component'
import {boycloth} from '../../../boycloth.services'


@Component({
  selector: 'app-boyedit',
  templateUrl: './boyedit.component.html',
  styleUrls: ['./boyedit.component.css']
})
export class BoyeditComponent implements OnInit {

  edit = false
  boydata : clothmodel 
  newcloth  : FormGroup
  
  brand  : string = " "
  description : string = " "
  price : number = null
  image : string = " "
  id : number
  
  constructor(private route : ActivatedRoute , private boyser : boycloth , private routes : Router ) { }

  ngOnInit() {
            
            this.route.params.subscribe((param : Params) => {
                this.id = +param['id'] ;
                console.log(param)
                this.edit = true ;
                this.boydata = this.boyser.expandvalue(this.id)
                console.log(this.id);
              
            })
            
              if(this.edit){
                  this.brand = this.boydata.brand ;
                  this.image = this.boydata.image;
                  this.description = this.boydata.description;
                  this.price = this.boydata.price ;
              }
            
            
            this.newcloth = new FormGroup({
              'brand' : new FormControl(this.brand , [Validators.required]),
              'image' : new FormControl(this.image , [Validators.required]),
              'description' : new FormControl(this.description , [Validators.required]),
              price : new FormControl(this.price , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
            
    }
    
  
  onsub(){
    this.edit = true;
    this.boyser.boyarrchange(this.id , this.newcloth.value);
            this.routes.navigate(['/boyscloth'] )
  
  }
  

  
  
}
