import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HomeComponent,
  RouteComponent,
  NavbarComponent,
  FooterComponent
} from './components';
import { ContainerDirective } from './directives/container.directive';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RouteComponent,
    NavbarComponent,
    FooterComponent,
    ContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBp7-48qKl3mat1o4U5zDMP_oLwY2alq8M' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
