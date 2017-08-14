import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PaginationControllorComponent } from './components/pagination-controllor/pagination-controllor.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, PaginationControllorComponent, AlertComponent, LoadingComponent, SelectComponent],
  exports: [TableComponent, PaginationControllorComponent, AlertComponent, LoadingComponent, SelectComponent]
})
export class PublicModule { }
