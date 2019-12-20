import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './component/main/main.component';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {TranslatorModule} from 'angular-translator';

@NgModule({
  declarations: [MainComponent],
  imports: [
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,

    /** 导入 国际化 模块 **/
    TranslatorModule.forRoot({
      providedLanguages: ['zh'],
      defaultLanguage: 'zh',
      // 默认根据运行环境,自动选择语言
      detectLanguage: true
    }),
    CommonModule
  ]
})
export class MainModule { }
