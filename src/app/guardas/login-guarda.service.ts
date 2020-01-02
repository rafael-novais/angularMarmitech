import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardaService implements CanActivate{
  
  constructor(private usuarioLogado: LoginServiceService, private router: Router) { }
  
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
  state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if(this.usuarioLogado.userLogado){
      return true;
    }

    this.router.navigate(['']);

    return false;

  }

}
