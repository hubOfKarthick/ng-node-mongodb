import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app-service.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataListComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
