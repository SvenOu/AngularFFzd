import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Translator} from 'angular-translator';
import {AppConstant} from '../../_common/bean/AppConstant';
import {TransitionService} from '../../_common/service/transition.service';
import {TransitionCallback} from '../../_common/interface/CommonInterfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit,OnDestroy, AfterViewInit, TransitionCallback {

  private trans: object = {};
  private profileUrl: string = AppConstant.profileMainUrl;
  private pageConstant = AppConstant;
  private curPageName:string;

  constructor(private translator: Translator, private ts: TransitionService) {
    ts.registerTransitionCallback(this);
  }

  ngAfterViewInit(): void {
    // 去掉加载信息
    const loadingEl = document.getElementById('initLoading');
    if(loadingEl && loadingEl.parentNode){
      loadingEl.parentNode.removeChild(loadingEl);
    }
  }

  onOpenPage(pageName: string, param?: any): void {
    this.curPageName = pageName;
  }

  ngOnDestroy(): void {
    this.ts.unRegisterTransitionCallback(this);
  }

  ngOnInit(): void {
    this.ts.onOpenPage(AppConstant.pageStart);
    const keys:string[] =[
      'searchPlaceholder'
    ];
    this.translator.translate(keys).then((translations) => {
      if (typeof translations !== 'string') {
        translations.forEach((val, i, array) => {
          this.trans[keys[i]] = translations[i];
        });
      }
    });
  }

  goBack(event) {
    this.ts.goBack(event);
  }

  goProfile(event) {
    this.ts.navigate([this.profileUrl]);
  }
}
