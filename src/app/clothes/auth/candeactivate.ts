import {CanDeactivate} from '@angular/router'
import {boycloth} from '../boycloth.services'
import {BoyeditComponent} from '../boycloth/boyid/boyedit/boyedit.component'
import {Injectable} from '@angular/core'

@Injectable()

export class Deactivate implements CanDeactivate<BoyeditComponent>{
    
        constructor( private boyser : boycloth){}
    
        canDeactivate( component : BoyeditComponent ){
            if( component.newcloth.dirty || component.newcloth.touched){
                return confirm("Are you sure want to discard the change")
            }
                return true ; 
            
        }
}