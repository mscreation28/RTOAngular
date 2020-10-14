import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QBookComponent } from './components/qbook/qbook.component';
import { HomeComponent } from './components/home/home.component';
import { RoadSignComponent } from './components/road-sign/road-sign.component';
import { RegularTestComponent } from './components/regular-test/regular-test.component';
import { CustomTestComponent } from './components/custom-test/custom-test.component';

@NgModule({
  declarations: [
    AppComponent,
    QBookComponent,
    HomeComponent,
    RoadSignComponent,
    RegularTestComponent,
    CustomTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 35,
      "outerStrokeWidth": 7,
      "outerStrokeColor": "#ffee00",
      "outerStrokeLinecap": "square",
      "titleFontSize": "23",
      "titleFontWeight": "600",
      "animation": false,
      "showSubtitle": false,
      "showUnits": false,
      "showInnerStroke": false
    })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
