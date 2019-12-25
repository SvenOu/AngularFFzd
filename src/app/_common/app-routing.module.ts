import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';
import {MyCenterComponent} from '../profile/component/my-center/my-center.component';
import {AppConstant} from './bean/AppConstant';
import {AppAuthGuard} from './gurad/app-auth.guard';
import {MyCourseComponent} from '../profile/component/my-course/my-course.component';
import {MyCollectComponent} from '../profile/component/my-collect/my-collect.component';
import {MyCustomerServiceComponent} from '../profile/component/my-customer-service/my-customer-service.component';
import {MyDownloadListComponent} from '../profile/component/my-download-list/my-download-list.component';
import {MyHelpComponent} from '../profile/component/my-help/my-help.component';

const routes: Routes = [
  { path: '', redirectTo: AppConstant.operationUrlPrefix + 'ffChild/0', pathMatch: 'full' , canActivate: [AppAuthGuard]},
  { path: AppConstant.operationUrlPrefix + ':typeId/:tabIndex', component: MainComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMainUrl, component: MyCenterComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMyCourseUrl, component: MyCourseComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMyCollectUrl, component: MyCollectComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMyCustomerServiceUrl, component: MyCustomerServiceComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMyDownloadListUrl, component: MyDownloadListComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMyHelpUrl, component: MyHelpComponent, canActivate: [AppAuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
