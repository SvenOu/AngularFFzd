import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {AppComponent} from '../start/component/app.component';
import {MyCenterComponent} from '../profile/component/my-center/my-center.component';
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'product/ffChild/:tabId', component: MyCenterComponent }
];
// export const router:RouterModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
