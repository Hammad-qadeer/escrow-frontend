import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryMainComponent } from './transaction-history-main/transaction-history-main.component';


@NgModule({
  declarations: [
    TransactionHistoryMainComponent
  ],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule
  ]
})
export class TransactionHistoryModule { }
