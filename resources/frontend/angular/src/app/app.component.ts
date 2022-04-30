import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggedService } from './shared/services/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  loggedIn$ = this.loggedSvc.loggedIn$;

  constructor(private loggedSvc: LoggedService){}

  ngOnInit(){
    this.loggedSvc.newValue();
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedSvc.newValue();
  }
}
