import {CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router'
import {boycloth} from '../boycloth.services'
import {Injectable} from '@angular/core'

@Injectable()
export class Activate implements CanActivate{
    constructor( private boyser : boycloth  ){}
    
    canActivate( route : ActivatedRouteSnapshot , state : RouterStateSnapshot ) : boolean {
        
        return this.boyser.isAuthenticated() ; 
    }
}