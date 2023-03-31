import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children:[
    { path: 'treat-basket', loadChildren: () => import('../merchant/merchant.module').then(m => m.MerchantModule) },
    { path:'', redirectTo:'treat-basket', pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
