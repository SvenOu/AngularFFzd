import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';
import {MyCenterComponent} from '../profile/component/my-center/my-center.component';

const routes: Routes = [
  { path: '', redirectTo: 'product/operation/ffChild/0', pathMatch: 'full' },
  { path: 'product/operation/:typeId/:tabIndex', component: MainComponent},
  { path: 'product/profile', component: MyCenterComponent}
];

const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    appRouting
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
