import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentLayoutComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
