import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfListComponent } from './cf-list/cf-list.component';
import { CfDetailComponent } from './cf-detail/cf-detail.component';

const cfRoutes: Routes = [
{path: 'cfs', component: CfListComponent},
{path: 'cf/:id', component: CfDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cfRoutes)],
  exports: [RouterModule]
})
export class CfsRoutingModule { }