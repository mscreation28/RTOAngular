import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgCircleProgressModule } from 'ng-circle-progress'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QBookComponent } from './components/qbook/qbook.component';
import { HomeComponent } from './components/home/home.component';
import { RoadSignComponent } from './components/road-sign/road-sign.component';
import { RegularTestComponent } from './components/regular-test/regular-test.component';
import { CustomTestComponent } from './components/custom-test/custom-test.component';
import { ResultComponent } from './components/result/result.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    QBookComponent,
    HomeComponent,
    RoadSignComponent,
    RegularTestComponent,
    CustomTestComponent,
    ResultComponent,
    SignupComponent,
    LoginComponent
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
    }),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
