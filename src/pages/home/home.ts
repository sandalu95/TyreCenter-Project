import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goToEntry():void{
    this.navCtrl.push("EntryPage");
  }
  goToGiveAway():void{
    this.navCtrl.push("GiveawayPage");
  }
  goToRecieved():void{
    this.navCtrl.push("RecievedPage");
  }
  goToReports():void{
    this.navCtrl.push("ReportsPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  

}
