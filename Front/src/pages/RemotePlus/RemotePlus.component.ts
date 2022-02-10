import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RemotePlusService } from 'src/services/RemotePlus.service';

@Component({
  selector: 'app-RemotePlus',
  templateUrl: './RemotePlus.component.html',
  styleUrls: ['../../styles.css']
})
export class RemotePlusComponent implements OnInit {
  articles: any;
  showError = false;
  showButton=false;
  constructor(
    private remotePlusService: RemotePlusService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.Consultar();
  }
  Consultar(){
    this.remotePlusService.getArticles().subscribe(
      data=>{

        if(data!==undefined){
          this.articles = data.articles;
        }
        else{
          this.showError= true;
        }
      },
      error =>{
        console.log(error);
      }
    )
  }
  onScrollTop(){
    this.document.documentElement.scrollTop=0;
  }
}
