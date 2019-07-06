import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule,
  MatFormFieldModule,
  MatTableModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ĈefpaĝoComponent } from './ĉefpaĝo/ĉefpaĝo.component';
import { VortoComponent } from './vorto/vorto.component';
import { OkenaVortoComponent } from './okena-vorto/okena-vorto.component';

@NgModule({
  declarations: [
    AppComponent,
    ĈefpaĝoComponent,
    VortoComponent,
    OkenaVortoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
