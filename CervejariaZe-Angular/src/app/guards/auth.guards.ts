import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuards implements CanActivate{
    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem("usuarioLogado")){
            return true;
        }
        
        this.router.navigate(['/login']);
        return false;
    }
}