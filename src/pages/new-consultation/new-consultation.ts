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
  //use provider
  getTasks(){
    this.servicesProvider.getTasks().subscribe( (parts: any) => {
    for (let part of parts) {
    console.log(part.name);
    }
    });
  }
}
