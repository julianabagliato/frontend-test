import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { FeaturesModule } from '@app/features/features.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FeaturesModule,
    SharedModule
  ],
  exports: [
    FeaturesModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
