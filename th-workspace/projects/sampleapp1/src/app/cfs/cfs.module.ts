import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { CfListComponent } from './cf-list/cf-list.component';
import { CfDetailComponent } from './cf-detail/cf-detail.component';

import { CfsRoutingModule } from './cfs-routing.module';


@NgModule({
  declarations: [
  CfListComponent,
  CfDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CfsRoutingModule
  ]
})
export class CfsModule { }
