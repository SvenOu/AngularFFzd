import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {NavigationExtras, Router} from '@angular/router';
import {AppConstant} from '../bean/AppConstant';
import {TransitionCallback} from '../interface/CommonInterfaces';
import {AppUtils} from '../utils/AppUtils';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {
  private static instance: TransitionService;

  public static getInstance(): TransitionService {
    return TransitionService.instance;
  };

  private tsCallbacks: TransitionCallback[] = [];

  constructor(private router: Router, private location: Location) {
    TransitionService.instance = this;
  }

  public registerTransitionCallback(callback: TransitionCallback) {
    if (!AppUtils.arrayContains(this.tsCallbacks, callback)) {
      this.tsCallbacks.push(callback);
    }
  }

  public unRegisterTransitionCallback(callback: TransitionCallback) {
    if (!AppUtils.arrayContains(this.tsCallbacks, callback)) {
      AppUtils.removeElement(this.tsCallbacks, callback);
    }
  }

  public clearTransitionCallback(callback: TransitionCallback) {
    if (!AppUtils.arrayContains(this.tsCallbacks, callback)) {
      this.tsCallbacks = [];
    }
  }

  public goBack(event) {
    if (this.location.path() && this.location.path().lastIndexOf(AppConstant.operationUrlPrefix) > 0) {
      const ts = TransitionService.getInstance();
      ts.goAndroidBack();
      return;
    }
    this.location.back();
  }

  public navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(commands, extras);
  };

  public goVipOrder() {
    console.log('goVipOrder');
  }

  public goAndroidBack() {
    console.log('goAndroidBack');
  }

  public onOpenPage(pageName: string) {
    this.notifyPageChange(pageName);
  }

  private notifyPageChange(pageName: string) {
    this.tsCallbacks.forEach((val: TransitionCallback, idx, array) => {
      // val: 当前值
      // idx：当前index
      // array: Array
      val.onOpenPage(pageName);
    });
  }
}
