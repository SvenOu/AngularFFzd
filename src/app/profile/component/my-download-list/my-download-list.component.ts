import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-my-download-list',
  templateUrl: './my-download-list.component.html',
  styleUrls: ['./my-download-list.component.styl']
})
export class MyDownloadListComponent implements OnInit {

  constructor(private ts:TransitionService) { }

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageMyDownloadList);
  }

}
