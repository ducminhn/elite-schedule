import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingPage } from '../standing/standing';
import { TeamDetailPage } from '../team-detail/team-detail';
import { MyTeamsPage } from '../my-teams/my-teams';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingPage;
  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {}

  goHome(){
    this.navCtrl.popToRoot();
  }

}
