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
  private profileMyCourseUrl: string = AppConstant.profileMyCourseUrl;

  constructor(private router: ActivatedRoute, private ts:TransitionService) { }

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageProfile);
  }

  goMyCourse(event) {
    this.ts.navigate([this.profileMyCourseUrl]);
  }

  goCollect(event) {

  }

  goCustomerService(event) {

  }

  goHelp(event) {

  }

  goDownloadList(event) {

  }
}
