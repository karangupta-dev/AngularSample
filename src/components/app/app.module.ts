import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildBComponent } from '../childB/childB.component';
import { ChildAComponent } from '../childA/childA.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
