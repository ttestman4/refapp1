import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CfListComponent } from './cf-list/cf-list.component';
import { CfDetailsComponent } from './cf-details/cf-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    {path: 'cfs', component: CfListComponent},
    {path: 'cf', component: CfDetailsComponent},
    {path: '', redirectTo: '/cfs', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
            routes,
            {enableTracing: true} //debugging purpose only
        )
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
