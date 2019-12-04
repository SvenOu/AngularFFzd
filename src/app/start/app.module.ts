import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../_common/app-routing.module';
import {AppComponent} from './component/app.component';
import {TranslatorModule} from 'angular-translator';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
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
}
