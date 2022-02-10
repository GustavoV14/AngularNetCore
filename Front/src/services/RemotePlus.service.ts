import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Respuesta } from 'src/interface/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RemotePlusService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  private UrlApi=environment.url_api_remoteplus;
  getArticles(): Observable<Respuesta>{
    return this.http.get<Respuesta>(this.UrlApi);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      if(error.status === 403){
        console.error("SE ACABARON LAS CONSULTAS AL API ");
      }if (error.status >=500) {
        console.log("Verificar el servicio de NetCore este Activo");
      }
      return of(result as T);
    };
  }
}
