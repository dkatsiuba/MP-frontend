import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewConsultationPage } from './new-consultation';

@NgModule({
  declarations: [
    NewConsultationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewConsultationPage),
  ],
})
export class NewConsultationPageModule {}
