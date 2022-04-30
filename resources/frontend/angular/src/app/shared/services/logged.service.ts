import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoggedService{
  loggedIn = new BehaviorSubject<boolean>(false);

  get loggedIn$(): Observable<boolean>{
     return this.loggedIn.asObservable();
  }

  newValue(){
    this.loggedIn.next(localStorage.getItem('token') !== null);
  }
}