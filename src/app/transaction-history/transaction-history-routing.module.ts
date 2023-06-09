import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionHistoryMainComponent } from './transaction-history-main/transaction-history-main.component';

const routes: Routes = [
  {path:'',component:TransactionHistoryMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionHistoryRoutingModule { }
