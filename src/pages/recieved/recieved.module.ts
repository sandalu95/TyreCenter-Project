import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecievedPage } from './recieved';

@NgModule({
  declarations: [
    RecievedPage,
  ],
  imports: [
    IonicPageModule.forChild(RecievedPage),
  ],
})
export class RecievedPageModule {}
