import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.withConfig({useColumnBasisZero: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
