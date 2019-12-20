import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Translator} from 'angular-translator';
import {TabsOnChangeEvent} from 'ng-zorro-antd-mobile/tabs/PropsType';
import {TabVo} from './bean/TabVo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit, AfterViewInit {
  private trans: object = {};
  private tabConfig: TabVo;
  private activeIndex: number = 0;
  constructor(private translator: Translator) {}

  ngAfterViewInit(): void {
    // 去掉加载信息
    const loadingEl = document.getElementById('initLoading');
    loadingEl.parentNode.removeChild(loadingEl);
  }

  ngOnInit(): void {
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

  onLeftClick() {
    console.log('onLeftClick');
  }

  selectCard($event: TabsOnChangeEvent) {

  }
}
