import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MyCenterComponent } from './component/my-center/my-center.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';


@NgModule({
  declarations: [MyCenterComponent],
  imports: [
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,
    CommonModule
  ]
})
export class ProfileModule { }
