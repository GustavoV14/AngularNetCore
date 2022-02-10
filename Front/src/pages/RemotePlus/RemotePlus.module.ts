import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemotePlusComponent } from './RemotePlus.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RemotePlusComponent],
  exports:[RemotePlusComponent]
})
export class RemotePlusModule { }
