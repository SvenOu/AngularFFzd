import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';
import {MyCenterComponent} from '../profile/component/my-center/my-center.component';
import {AppConstant} from './bean/AppConstant';
import {AppAuthGuard} from './gurad/app-auth.guard';
import {MyCourseComponent} from '../profile/component/my-course/my-course.component';

const routes: Routes = [
  { path: '', redirectTo: AppConstant.operationUrlPrefix + 'ffChild/0', pathMatch: 'full' , canActivate: [AppAuthGuard]},
  { path: AppConstant.operationUrlPrefix + ':typeId/:tabIndex', component: MainComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMainUrl, component: MyCenterComponent, canActivate: [AppAuthGuard]},
  { path: AppConstant.profileMyCourseUrl, component: MyCourseComponent, canActivate: [AppAuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
