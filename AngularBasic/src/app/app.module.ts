import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgkeyComponent } from './ngkey/ngkey.component';
import { TableComponent } from './table/table.component';
import { APIBasicComponent } from './apibasic/apibasic.component';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NgkeyComponent,
    TableComponent,
    APIBasicComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
