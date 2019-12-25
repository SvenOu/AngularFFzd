import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-my-help',
  templateUrl: './my-help.component.html',
  styleUrls: ['./my-help.component.styl']
})
export class MyHelpComponent implements OnInit {

  constructor(private ts:TransitionService) { }

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageMyHelp);
  }

}
