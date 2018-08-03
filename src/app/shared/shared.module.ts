import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';

const sharedComponents = [
  SharedExampleComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...sharedComponents],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
