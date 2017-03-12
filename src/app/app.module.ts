import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamHomePage } from '../pages/team-home/team-home';
import { StandingPage } from '../pages/standing/standing';

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
		IonicModule.forRoot(MyApp)
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
	providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
