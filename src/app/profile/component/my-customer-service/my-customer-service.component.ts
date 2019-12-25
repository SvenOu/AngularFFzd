import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-my-customer-service',
  templateUrl: './my-customer-service.component.html',
  styleUrls: ['./my-customer-service.component.styl']
})
export class MyCustomerServiceComponent implements OnInit {

  constructor(private ts:TransitionService) { }

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageMyCustomerService);
  }

}
