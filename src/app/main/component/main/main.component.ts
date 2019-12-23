import {Component, OnInit} from '@angular/core';
import {Translator} from 'angular-translator';
import {TabsOnChangeEvent} from 'ng-zorro-antd-mobile/tabs/PropsType';
import {ActivatedRoute, Router} from '@angular/router';
import {TabVo} from '../../../_common/bean/TabVo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit{
  /**
   * 第一层tab配置
   */
  private types = {
    type0: 'ffChild',
    type1: 'childRearing'
  };

  /**
   * 第一层tab选中索引
   */
  private actRootIndex = 0;

  /**
   * 第二层tab选中索引
   */
  private actTabIndexMap = new Map();

  private tabRootConfig:object = {};
  private trans: object = {};
  private tabConfigs: TabVo[];
  private curTypeId: string = this.types.type1;
  constructor(
    private translator: Translator,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activateRouter.params.subscribe(params => {
      console.log(params);
      const typeId:string = params['typeId'];
      const tabIndex:string = params['tabIndex'];
      if(typeId){
        this.curTypeId = typeId;
        if(tabIndex && typeof tabIndex != 'string'){
          this.actTabIndexMap.set(this.actRootIndex, tabIndex);
        }
      }
    });
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
        const tabVo1 = new TabVo(this.trans[this.types.type0], 'ffChild', childs1);

        const childs2: TabVo[] = [
          new TabVo(this.trans['recommend'], 0, null),
          new TabVo(this.trans['parenting'], 1, null),
          new TabVo(this.trans['thymopsyche'], 2, null),
          new TabVo(this.trans['socialCommunication'], 3, null),
          new TabVo(this.trans['healthBeauty'], 4, null),
          new TabVo(this.trans['workMakeMoney'], 5, null),
          new TabVo(this.trans['lifeGrowingUp'], 6, null)
        ] ;
        const tabVo2 = new TabVo(this.trans[this.types.type1], 'childRearing', childs2);

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
    if(event && event.selectedIndex >=0){
      this.actRootIndex = event.selectedIndex;
    }
    console.log(event);
  }

  onSelectLevelTwoTab(event: TabsOnChangeEvent) {
    this.actTabIndexMap.set(this.actRootIndex, event.index);
    console.log(this.getCurTabIndex());
  }

  getCurTabIndex() {
    console.log(this.actTabIndexMap);
    const val = this.actTabIndexMap.get(this.actRootIndex);
    return val ? val:0
  }
}

