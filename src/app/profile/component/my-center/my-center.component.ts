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
    // this.router.params.subscribe(params => {
    //   // this.product = products[+params.get('productId')];
    //   console.log(this.router);
    //   console.log(params.get('typeId'));
    //   console.log(params.get('tabIndex'));
    //
    // });
  }
}
