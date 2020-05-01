import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LolComponent } from './foo/bar/lol/lol.component';
import { StreamComponent } from './my-component/stream/stream.component';
import { StreamWithDestroyComponent } from './my-component/stream-with-destroy/stream-with-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    LolComponent,
    StreamComponent,
    StreamWithDestroyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
