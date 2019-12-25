import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MyCenterComponent } from './component/my-center/my-center.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {TranslatorModule} from 'angular-translator';
import { MyCourseComponent } from './component/my-course/my-course.component';
import { MyCollectComponent } from './component/my-collect/my-collect.component';
import { MyCustomerServiceComponent } from './component/my-customer-service/my-customer-service.component';
import { MyHelpComponent } from './component/my-help/my-help.component';
import { MyDownloadListComponent } from './component/my-download-list/my-download-list.component';

@NgModule({
  declarations: [MyCenterComponent, MyCourseComponent, MyCollectComponent, MyCustomerServiceComponent, MyHelpComponent, MyDownloadListComponent],
  imports: [
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,
    CommonModule,
    /** 导入 国际化 模块 **/
    TranslatorModule.forRoot({
      providedLanguages: ['zh'],
      defaultLanguage: 'zh',
      // 默认根据运行环境,自动选择语言
      detectLanguage: true
    })
  ]
})
export class ProfileModule { }
