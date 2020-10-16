import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomTestComponent } from './components/custom-test/custom-test.component';
import { HomeComponent } from './components/home/home.component';
import { QBookComponent } from './components/qbook/qbook.component';
import { RegularTestComponent } from './components/regular-test/regular-test.component';
import { ResultComponent } from './components/result/result.component';
import { RoadSignComponent } from './components/road-sign/road-sign.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'qbook',
		component: QBookComponent
	},
	{
		path: 'roadsign',
		component: RoadSignComponent
	},
	{
		path: 'regulartest',
		component: RegularTestComponent
	},
	{
		path: 'customtest',
		component: CustomTestComponent
	},
	{
		path: 'result',
		component: ResultComponent
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
