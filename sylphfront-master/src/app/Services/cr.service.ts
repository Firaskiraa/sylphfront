import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'inspector';
import { Compterendu } from '../model/compterendu';

@Injectable({
  providedIn: 'root'
})
export class CrService {


crlist : Compterendu [] ; 
  constructor(private http:HttpClient) { }
  getcrlist(): Observable<Compterendu[]> {
    this.http.get<Compterendu[]>("http://localhost:8080/rest/allcr.json")
    
    .subscribe(
      (response) => {

        this.crlist = response;
        
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  getCrlist(): Observable<Compterendu[]>{
    return this.http.get<Compterendu[]>("http://localhost:8080/rest/allcr.json")
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Errorrrrr");
  }
}
