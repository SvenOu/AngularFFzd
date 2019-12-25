import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-my-collect',
  templateUrl: './my-collect.component.html',
  styleUrls: ['./my-collect.component.styl']
})
export class MyCollectComponent implements OnInit {

  constructor(private ts:TransitionService) { }

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageMyCollect);
  }

}
