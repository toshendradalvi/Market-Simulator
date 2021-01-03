import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockGridComponent } from './asset/stock-grid/stock-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	IgxGridModule,
  IgxFocusModule,
  IgxIconModule,
	IgxInputGroupModule,
	IgxButtonModule,
	IgxRippleModule,
	IgxDatePickerModule,
	IgxTimePickerModule,
	IgxComboModule,
	IgxDropDownModule,
	IgxSelectModule
 } from "igniteui-angular";
import { StockService } from './services/stock.service';
import { CreateStockComponent } from './asset/create-stock/create-stock.component';
import { 
	FormsModule,
	ReactiveFormsModule
 } from "@angular/forms";
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    StockGridComponent,
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
      IgxButtonModule,
      IgxRippleModule,
      IgxDatePickerModule,
      IgxTimePickerModule,
      IgxComboModule,
      FormsModule,
      ReactiveFormsModule,
      IgxDropDownModule,
      IgxSelectModule
  ],
  providers: [StockService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

}