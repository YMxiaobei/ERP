import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PaginationControllorComponent } from './components/pagination-controllor/pagination-controllor.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, PaginationControllorComponent, AlertComponent, LoadingComponent],
  exports: [TableComponent, PaginationControllorComponent, AlertComponent, LoadingComponent]
})
export class PublicModule { }
