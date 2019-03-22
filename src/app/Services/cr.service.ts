import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CrService {

  constructor(private http:HttpClient) { }
  getcrlist() {
    this.http.get<any[]>("http://localhost:8080/rest/allcr.json").subscribe(
      (response) => {

        this.crlist = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );

    

  }
}
