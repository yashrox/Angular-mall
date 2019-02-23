import { Pipe , PipeTransform } from '@angular/core';
import {clothmodel } from '../clothes/cloth.model';

@Pipe({
    name : 'filter'
})

export class searchdata implements PipeTransform{
    
    transform(value : any ,  searchname : string)  {
   

        
       if(!value || !searchname){
         return value 
       } 
        
        return value.filter(val => 
                val.brand.toLowerCase().indexOf(searchname.toLowerCase()) != -1) 
        
        
        }
    
    
}




 //         if(value.length == 0){
    //             return value
    //         }else {
                
    //             const val = [];
    //             for(const values of value){
    //                 if(values[originalname] === searchname){
    //                 val.push(value);
    //             }
    //         }
                
    //             return val;
                
    //         }
        
    // }