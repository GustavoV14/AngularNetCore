import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from 'src/pages/Local/Local.component';
import { RemoteComponent } from 'src/pages/Remote/Remote.component';
import { RemotePlusComponent } from 'src/pages/RemotePlus/RemotePlus.component';

const routes: Routes = [

{
  path:'Local',
  component: LocalComponent

},
{
  path:'Remote',
  component: RemoteComponent

},
{
  path:'RemotePlus',
  component: RemotePlusComponent
}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
