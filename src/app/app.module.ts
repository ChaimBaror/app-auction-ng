import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LogingComponent } from './components/loging/loging.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    LogingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
