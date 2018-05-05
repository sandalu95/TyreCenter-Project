import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  loggedin:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  loggedIn(){
    
  }
  goToSignUp():void{
    this.navCtrl.push("SignUpPage");
  }
  goToHome():void{
    this.navCtrl.push("HomePage");
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Forgot Password',
      message: "Enter your email",
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  

}
