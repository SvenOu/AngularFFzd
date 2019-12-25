import { Component, OnInit } from '@angular/core';
import {AppConstant} from '../../../_common/bean/AppConstant';
import {TransitionService} from '../../../_common/service/transition.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.styl']
})
export class MyCourseComponent implements OnInit {

  constructor(private ts:TransitionService) {}

  ngOnInit() {
    this.ts.onOpenPage(AppConstant.pageProfileMyCourse);
  }

}
