import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../main/component/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product/:typeId/:tabIndex', component: MainComponent }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    appRouting
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
