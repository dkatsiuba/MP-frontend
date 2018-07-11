import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  createConsultation(){
    this.navCtrl.push('NewConsultationPage');
    //document.getElementById("01p").textContent = "hallo";
  }

}

