import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiKeysMainComponent } from './api-keys-main/api-keys-main.component';

const routes: Routes = [
  {path:'',component:ApiKeysMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiKeysRoutingModule { }
