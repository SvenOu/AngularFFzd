import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';
import {MyCenterComponent} from '../profile/component/my-center/my-center.component';
import {AppConstant} from './bean/AppConstant';

const routes: Routes = [
  { path: '', redirectTo: AppConstant.operationUrlPrefix + '/ffChild/0', pathMatch: 'full' },
  { path: AppConstant.operationUrlPrefix + '/:typeId/:tabIndex', component: MainComponent},
  { path: AppConstant.profileUrlPrefix, component: MyCenterComponent}
];

const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    appRouting
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
