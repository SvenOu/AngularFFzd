import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../start/component/app.component';
import {MainComponent} from '../main/component/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product/ffChild/:tabId', component: MainComponent }
];
// export const router:RouterModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
