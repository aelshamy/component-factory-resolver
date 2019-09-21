import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PerfumeModule } from 'perfume.js/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorFactoryWrapperComponent } from './color-factory-wrapper/color-factory-wrapper.component';
import { ColorFactoryComponent } from './color-factory/color-factory.component';
import { ColorSwitchComponent } from './color-switch/color-switch.component';
import {
  BananaComponent,
  BubblegumComponent,
  CarnationComponent,
  ColorsComponent,
  CreamComponent,
  FloralComponent,
  FuchsiaComponent,
  HoneydewComponent,
  LawnComponent,
  LollipopComponent,
  MindaroComponent,
  PistachioComponent,
  RubyComponent,
  ThistleComponent,
  TromboneComponent,
  YellowComponent
} from './colors/colors.component';

// Perfume.js config, supports AOT and DI
export const PerfumeConfig = {
  firstContentfulPaint: true,
  firstInputDelay: true
};

@NgModule({
  declarations: [
    AppComponent,
    ColorSwitchComponent,
    ColorFactoryComponent,
    ColorsComponent,
    ThistleComponent,
    LollipopComponent,
    FloralComponent,
    FuchsiaComponent,
    LawnComponent,
    RubyComponent,
    BubblegumComponent,
    CarnationComponent,
    HoneydewComponent,
    MindaroComponent,
    PistachioComponent,
    YellowComponent,
    CreamComponent,
    BananaComponent,
    TromboneComponent,
    ColorFactoryWrapperComponent
  ],
  imports: [BrowserModule, AppRoutingModule, PerfumeModule.forRoot(PerfumeConfig)],
  providers: [],
  entryComponents: [
    ColorsComponent,
    ThistleComponent,
    LollipopComponent,
    FloralComponent,
    FuchsiaComponent,
    LawnComponent,
    RubyComponent,
    BubblegumComponent,
    CarnationComponent,
    HoneydewComponent,
    MindaroComponent,
    PistachioComponent,
    YellowComponent,
    CreamComponent,
    BananaComponent,
    TromboneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
