import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamHomePage } from '../pages/team-home/team-home';
import { StandingPage } from '../pages/standing/standing';
import { HttpModule } from '@angular/http';
import { EliteApi } from '../shared/shared';

@NgModule({
	declarations: [
		MyApp,
		MyTeamsPage,
		TournamentsPage,
		GamePage,
		TeamsPage,
		TeamDetailPage,
		TeamHomePage,
		StandingPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		MyTeamsPage,
		TournamentsPage,
		GamePage,
		TeamsPage,
		TeamDetailPage,
		TeamHomePage,
		StandingPage
	],
	providers: [
		EliteApi
	]
})
export class AppModule { }
