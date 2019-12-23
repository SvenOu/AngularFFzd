import {NgModule} from '@angular/core';
import {AppComponent} from './component/app.component';
import {TranslatorModule} from 'angular-translator';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdMobileModule} from 'ng-zorro-antd-mobile';
import {appRouting, AppRoutingModule} from '../_common/app-routing.module';
import {ProfileModule} from '../profile/profile.module';
import {OrderModule} from '../order/order.module';
import {MainModule} from '../main/main.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,

    /** 导入 国际化 模块 **/
    TranslatorModule.forRoot({
      providedLanguages: ['zh'],
      defaultLanguage: 'zh',
      // 默认根据运行环境,自动选择语言
      detectLanguage: true
    }),

    /** app 内模块 **/
    AppRoutingModule,
    appRouting,
    MainModule,
    OrderModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
