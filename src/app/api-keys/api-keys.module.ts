import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiKeysRoutingModule } from './api-keys-routing.module';
import { ApiKeysMainComponent } from './api-keys-main/api-keys-main.component';


@NgModule({
  declarations: [
    ApiKeysMainComponent
  ],
  imports: [
    CommonModule,
    ApiKeysRoutingModule
  ]
})
export class ApiKeysModule { }
