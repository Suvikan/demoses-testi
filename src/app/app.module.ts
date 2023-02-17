import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RulettiComponent } from './ruletti/ruletti.component';
import { ReseptiComponent } from './resepti/resepti.component';


@NgModule({
  declarations: [
    AppComponent,
    RulettiComponent,
    ReseptiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
