import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { SomeComponent} from "./some/some.component";
import { AnotherComponent } from './other/another.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    SomeComponent,
    AnotherComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
