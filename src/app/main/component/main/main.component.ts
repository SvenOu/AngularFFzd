import {Component, OnInit} from '@angular/core';
import {Translator} from 'angular-translator';
import {ActivatedRoute, Router} from '@angular/router';
import {TabVo} from '../../../_common/bean/TabVo';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit{
  /**
   * 第一层tab选中索引
   */
  private actRootIndex;

  /**
   * 第一层tab配置
   */
  private typesMap = new Map();

  /**
   * 第二层tab选中索引
   */
  private actTabIndexMap = new Map();

  private tabRootConfig:any = {};
  private trans:any = {};
  private tabConfigs: TabVo[];
  private curTypeId: string;

  constructor(
    private translator: Translator,
    private ts: TransitionService,
    private activateRouter: ActivatedRoute)
  {
    // 初始化
    this.actRootIndex = 0;
    this.typesMap.set(0,'ffChild');
    this.typesMap.set(1,'childRearing');
    this.typesMap.set(2,'VIPOrder');
    this.curTypeId = this.typesMap.get(this.actRootIndex);

    this.activateRouter.params.subscribe(params => {
      const typeId:string = params['typeId'];
      const tabIndex:string = params['tabIndex'];
      if(typeId){
        this.curTypeId = typeId;
        for (let [key, value] of this.typesMap.entries()) {
          if(value == this.curTypeId){
              this.actRootIndex = key;
              break;
          }
        }
        if(tabIndex){
          this.actTabIndexMap.set(this.actRootIndex, tabIndex);
        }
      }
    });
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
          new TabVo(this.trans['ffSelection'], 0, null),
          new TabVo(this.trans['tabGraden'], 1, null),
          new TabVo(this.trans['culturalClassics'], 2, null),
          new TabVo(this.trans['englishParadise'], 3, null),
          new TabVo(this.trans['logicScience'], 4, null),
          new TabVo(this.trans['musicCastle'], 5, null),
          new TabVo(this.trans['animeStory'], 6, null)
        ] ;
        const tabVo1 = new TabVo(this.trans[this.typesMap.get(0)], this.typesMap.get(0), childs1);

        const childs2: TabVo[] = [
          new TabVo(this.trans['recommend'], 0, null),
          new TabVo(this.trans['parenting'], 1, null),
          new TabVo(this.trans['thymopsyche'], 2, null),
          new TabVo(this.trans['socialCommunication'], 3, null),
          new TabVo(this.trans['healthBeauty'], 4, null),
          new TabVo(this.trans['workMakeMoney'], 5, null),
          new TabVo(this.trans['lifeGrowingUp'], 6, null)
        ] ;
        const tabVo2 = new TabVo(this.trans[this.typesMap.get(1)], this.typesMap.get(1), childs2);

        this.tabConfigs = [];

        this.tabRootConfig['tabVoChild1'] = tabVo1.child;
        this.tabRootConfig['tabName1'] = tabVo1.tabName;

        this.tabRootConfig['tabVoChild2'] = tabVo2.child;
        this.tabRootConfig['tabName2'] = tabVo2.tabName;

        this.tabRootConfig['tabName3'] = this.trans['VIPOrder'];

        const tabVo3 = new TabVo(this.trans[this.typesMap.get(2)], this.typesMap.get(2), childs2);

        this.tabConfigs.push(tabVo1);
        this.tabConfigs.push(tabVo2);
        this.tabConfigs.push(tabVo3);
      }
    });
  }

  onSelectLevelOneTab(event) {
    if(event && event.selectedIndex >=0){
      const typeId:string = this.typesMap.get(event.selectedIndex);
      let tabIndex:number = this.actTabIndexMap.get(event.selectedIndex);
      if(typeof(tabIndex) == 'undefined'){
         tabIndex = 0;
      }
      const url:any = AppConstant.operationUrlPrefix  +"/"+ typeId +"/" + tabIndex;
      this.ts.navigate([url]);
    }
  }

  onSelectLevelTwoTab(event) {
    this.actTabIndexMap.set(this.actRootIndex, event.index);
  }
}

