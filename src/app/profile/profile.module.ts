import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MyCenterComponent } from './component/my-center/my-center.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {TranslatorModule} from 'angular-translator';


@NgModule({
  declarations: [MyCenterComponent],
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
