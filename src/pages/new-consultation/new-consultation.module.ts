import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewConsultationPage } from './new-consultation';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewConsultationPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(NewConsultationPage),
  ],
})
export class NewConsultationPageModule {}

