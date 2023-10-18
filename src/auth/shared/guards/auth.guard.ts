import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

import {AuthService} from "../services/auth/auth.service";
import {filter, map, Observable, take} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authState.pipe(
      take(1),
      map((authenticated: boolean | undefined) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(["auth/login"]);
          return false;
        }
      })
    )
  }
}
