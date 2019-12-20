
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Translator} from 'angular-translator';
import {TabsOnChangeEvent} from 'ng-zorro-antd-mobile/tabs/PropsType';
import {ActivatedRoute} from '@angular/router';
import {TabVo} from '../../../_common/bean/TabVo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit, AfterViewInit {
  private tabRootConfig:object = {};
  private trans: object = {};
  private tabConfigs: TabVo[];
  private activeRootIndex: number = 1;
  private activeIndex: number = 0;
  constructor(private translator: Translator, private router: ActivatedRoute) {}

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
          new TabVo(this.trans['ffSelection'], '1', null),
          new TabVo(this.trans['tabGraden'], '2', null),
          new TabVo(this.trans['culturalClassics'], '3', null),
          new TabVo(this.trans['englishParadise'], '4', null),
          new TabVo(this.trans['logicScience'], '5', null),
          new TabVo(this.trans['musicCastle'], '6', null),
          new TabVo(this.trans['animeStory'], '7', null)
        ] ;
        const tabVo1 = new TabVo(this.trans['ffChild'], 'ffChild', childs1);

        const childs2: TabVo[] = [
          new TabVo(this.trans['recommend'], '1', null),
          new TabVo(this.trans['parenting'], '2', null),
          new TabVo(this.trans['thymopsyche'], '3', null),
          new TabVo(this.trans['socialCommunication'], '4', null),
          new TabVo(this.trans['healthBeauty'], '5', null),
          new TabVo(this.trans['workMakeMoney'], '6', null),
          new TabVo(this.trans['lifeGrowingUp'], '7', null)
        ] ;
        const tabVo2 = new TabVo(this.trans['childRearing'], 'childRearing', childs2);

        this.tabConfigs = [];

        this.tabRootConfig['tabVoChild1'] = tabVo1.child;
        this.tabRootConfig['tabName1'] = tabVo1.tabName;

        this.tabRootConfig['tabVoChild2'] = tabVo2.child;
        this.tabRootConfig['tabName2'] = tabVo2.tabName;

        this.tabRootConfig['tabName3'] = this.trans['VIPOrder'];

        this.tabConfigs.push(tabVo1);
        this.tabConfigs.push(tabVo2);
      }
    });
  }

  onSelectLevelOneTab(event) {
    this.activeRootIndex = event.selectedIndex;
    console.log(event);
  }

  onSelectLevelTwoTab($event: TabsOnChangeEvent) {

  }
}

