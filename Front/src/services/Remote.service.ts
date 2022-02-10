import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Respuesta } from 'src/interface/respuesta';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private UrlApi=environment.url_api_remote;
  getArticles(): Observable<Respuesta>{
    return this.http.get<Respuesta>(this.UrlApi+"q=relojes&lang=es&max=2&token=485c56cab047ffc9d557cbae27c3419c").pipe(
      catchError(this.handleError<Respuesta>('getArticle()'))
    );
  }
  getArticlesPage(page:Number){
    return this.http.get<Respuesta>(this.UrlApi+"q=relojes&lang=es&max="+page+"&token=485c56cab047ffc9d557cbae27c3419c").pipe(
      catchError(this.handleError<Respuesta>('getArticle()'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      if(error.status === 403){
        console.error("SE ACABARON LAS CONSULTAS AL API ");
      }
      return of(result as T);
    };
  }

}


