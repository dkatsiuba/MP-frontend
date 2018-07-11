import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewConsultationPage } from './new-consultation';
import { HttpClientModule } from '@angular/common/http';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    NewConsultationPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(NewConsultationPage),
    ComponentsModule
  ],
})
export class NewConsultationPageModule {}

