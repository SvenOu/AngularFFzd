import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'product/ffChild/0', pathMatch: 'full' },
  { path: 'product/:typeId/:tabIndex', component: MainComponent}
];

const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    appRouting
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
