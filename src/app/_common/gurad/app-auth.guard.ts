import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AppConstant} from '../bean/AppConstant';
import {TransitionService} from '../service/transition.service';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuard implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state);
    // 如果是vip界面拦截
    if(state.url.lastIndexOf(AppConstant.typeVIPOrder) > 0){
      const ts = TransitionService.getInstance();
      ts.goVipOrder();
      return false;
    }
    return true;
  }
}
