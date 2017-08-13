import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PurchasingTableModule } from './purchasing-table/purchasing-table.module';
import { PostDataService } from './services/post-data.service';
import { GetDataService } from './services/get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    PurchasingTableModule,
    HttpModule
  ],
  providers: [PostDataService, GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
