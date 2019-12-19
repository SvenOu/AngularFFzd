import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../_common/app-routing.module';
import {AppComponent} from './component/app.component';
import {TranslatorModule} from 'angular-translator';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // material start

    // material end
    TranslatorModule.forRoot({
      providedLanguages: ['zh'],
      defaultLanguage: 'zh',
      // 默认根据运行环境,自动选择语言
      detectLanguage: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
