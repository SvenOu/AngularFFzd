import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import {NavigationExtras, Router} from '@angular/router';
import {AppConstant} from '../bean/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {
  private static instance:TransitionService;
  public static getInstance():TransitionService{
    return TransitionService.instance;
  };

  constructor(private router: Router,private location: Location) {
    TransitionService.instance = this;
  }

  public goBack(event) {
    if(this.location.path() && this.location.path().lastIndexOf(AppConstant.operationUrlPrefix) > 0){
      const ts = TransitionService.getInstance();
      ts.goAndroidBack();
      return;
    }
    this.location.back();
  }

  public navigate(commands: any[], extras?: NavigationExtras): Promise<boolean>{
    return this.router.navigate(commands, extras);
  };

  public goVipOrder() {
      console.log("goVipOrder");
  }

  public goAndroidBack() {
    console.log("goAndroidBack");
  }
}
