import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PurchasingTableComponent } from './purchasing-table.component';
import { PublicModule } from '../public/public.module';
import { AddShopComponent } from './components/add-shop/add-shop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicModule
  ],
  declarations: [PurchasingTableComponent, AddShopComponent],
  exports: [PurchasingTableComponent]
})
export class PurchasingTableModule { }
