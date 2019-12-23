import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';
import {MyCenterComponent} from '../profile/component/my-center/my-center.component';
import {AppConstant} from './bean/AppConstant';
import {AppAuthGuard} from './gurad/app-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: AppConstant.operationUrlPrefix + '/ffChild/0', pathMatch: 'full' , canActivate: [AppAuthGuard]},
  { path: AppConstant.operationUrlPrefix + '/:typeId/:tabIndex', component: MainComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileUrlPrefix, component: MyCenterComponent, canActivate: [AppAuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
