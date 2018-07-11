import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { ServicesProvider } from '../../providers/services/services';

const httpOptions = {
  headers: new HttpHeaders({
    'Content‐Type': 'application/json',
    'x‐apikey': '5b2e750b0c346a20d90a5dda'
  })
};

/**
 * Generated class for the NewConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-consultation',
  templateUrl: 'new-consultation.html',
})
export class NewConsultationPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicesProvider: ServicesProvider) {
  }
  ngOnInit():void{
    this.getTasks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewConsultationPage');
  }

  pnr = "";

  //use provider
  getTasks(){
    this.servicesProvider.getTasks().subscribe( (consultations: any) => {
    for (let c of consultations) {
    //console.log(c.patient.patientenNr);
    this.pnr = c.patient.patientenNr;
      document.getElementById("patientNumber").textContent = this.pnr;
    }
    });
  }

}
