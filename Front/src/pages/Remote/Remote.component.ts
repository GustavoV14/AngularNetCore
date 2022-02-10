import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RemoteService } from 'src/services/Remote.service';

@Component({
  selector: 'app-Remote',
  templateUrl: './Remote.component.html',
  styleUrls: ['../../styles.css']
})
export class RemoteComponent implements OnInit {
  showError = false;
  articles: any;
  showButton=false;
  scrollHiegth= 400;
  constructor(
    private remoteService: RemoteService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.Consultar();
  }
  @HostListener('window:scroll')
  onWindowScroll(){
    const yOffSet = window.pageXOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop )>this.scrollHiegth;
  }
  Consultar(){
    this.remoteService.getArticles().subscribe(
      data=>{
        if(data!==undefined){
          this.articles = data.articles;
        }
        else{
          this.showError= true;
        }
      }
    )
  }
  onScrollTop(){
    this.document.documentElement.scrollTop=0;
  }
  count=1;
  onScrollDown(){
    this.count++;
    this.remoteService.getArticlesPage(this.count).subscribe(
      data=>{
        this.articles= [...data.articles];
      });
  }
}
