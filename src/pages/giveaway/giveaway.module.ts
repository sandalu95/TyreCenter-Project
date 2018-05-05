import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiveawayPage } from './giveaway';

@NgModule({
  declarations: [
    GiveawayPage,
  ],
  imports: [
    IonicPageModule.forChild(GiveawayPage),
  ],
})
export class GiveawayPageModule {}
