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
  private tabRootConfig:object = {};
  private trans: object = {};
  private tabConfigs: TabVo[];
  private activeIndex: number = 0;
  constructor(private translator: Translator) {}

  ngAfterViewInit(): void {
    // 去掉加载信息
    const loadingEl = document.getElementById('initLoading');
    loadingEl.parentNode.removeChild(loadingEl);
  }

  ngOnInit(): void {
    const keys:string[] =[
      'searchPlaceholder',
      'ffChild',
      'animeParadise',
      'ffSelection',
      'tabGraden',
      'culturalClassics',
      'englishParadise',
      'logicScience',
      'musicCastle',
      'animeStory',
      'childRearing',
      'recommend',
      'parenting',
      'thymopsyche',
      'socialCommunication',
      'healthBeauty',
      'workMakeMoney',
      'lifeGrowingUp',
      'VIPOrder',
      'personalCenter'
    ];
    this.translator.translate(keys).then((translations) => {
      if (typeof translations !== 'string') {
        translations.forEach((val, i, array) => {
          this.trans[keys[i]] = translations[i];
        });
        const childs1: TabVo[] = [
          new TabVo(this.trans['ffSelection'], '', null),
          new TabVo(this.trans['tabGraden'], '', null),
          new TabVo(this.trans['culturalClassics'], '', null),
          new TabVo(this.trans['englishParadise'], '', null),
          new TabVo(this.trans['logicScience'], '', null),
          new TabVo(this.trans['musicCastle'], '', null),
          new TabVo(this.trans['animeStory'], '', null)
        ] ;
        const tabVo1 = new TabVo(this.trans['ffChild'], '', childs1);

        const childs2: TabVo[] = [
          new TabVo(this.trans['recommend'], '', null),
          new TabVo(this.trans['parenting'], '', null),
          new TabVo(this.trans['thymopsyche'], '', null),
          new TabVo(this.trans['socialCommunication'], '', null),
          new TabVo(this.trans['healthBeauty'], '', null),
          new TabVo(this.trans['workMakeMoney'], '', null),
          new TabVo(this.trans['lifeGrowingUp'], '', null)
        ] ;
        const tabVo2 = new TabVo(this.trans['childRearing'], '', childs2);

        this.tabConfigs = [];

        this.tabRootConfig['tabVoChild1'] = tabVo1.child;
        this.tabRootConfig['tabName1'] = tabVo1.tabName;
        this.tabConfigs.push(tabVo1);

        this.tabRootConfig['tabVoChild2'] = tabVo2.child;
        this.tabRootConfig['tabName2'] = tabVo2.tabName;
        this.tabConfigs.push(tabVo2);

        this.tabRootConfig['tabName3'] = this.trans['VIPOrder'];
        console.log(this.tabRootConfig)
      }
    });
  }

  onSelectLevelOneTab($event: TabsOnChangeEvent) {
    console.log(this.tabConfigs);
  }
}
