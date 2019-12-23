import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import {AppConstant} from '../bean/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state);
    // AppConstant.typeVIPOrder todo 根据此字符串判断
    return true;
  }
}
