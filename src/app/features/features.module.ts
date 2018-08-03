import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';


const features = [
  HomeModule
];

@NgModule({
  imports: [
    CommonModule,
    ...features
  ],
  exports: [
    ...features
  ],
  declarations: []
})
export class FeaturesModule { }
