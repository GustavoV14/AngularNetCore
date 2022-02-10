import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteComponent } from './Remote.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  declarations: [RemoteComponent],
  exports:[RemoteComponent]
})
export class RemoteModule { }
