import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-vip-order',
  templateUrl: './vip-order.component.html',
  styleUrls: ['./vip-order.component.styl']
})
export class VipOrderComponent implements OnInit {

  constructor(private ts:TransitionService) {}

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageVipOrder);
  }

}
