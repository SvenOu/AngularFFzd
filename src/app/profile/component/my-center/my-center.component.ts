import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.styl']
})
export class MyCenterComponent implements OnInit {
  constructor(private router: ActivatedRoute, private ts:TransitionService) { }

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageProfile);
  }

  goMyCourse(event) {
    this.ts.navigate([AppConstant.profileMyCourseUrl]);
  }

  goCollect(event) {
    this.ts.navigate([AppConstant.profileMyCollectUrl]);
  }

  goCustomerService(event) {
    this.ts.navigate([AppConstant.profileMyCustomerServiceUrl]);
  }

  goHelp(event) {
    this.ts.navigate([AppConstant.profileMyHelpUrl]);
  }

  goDownloadList(event) {
    this.ts.navigate([AppConstant.profileMyDownloadListUrl]);
  }
}
