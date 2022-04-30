import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user!: User; 

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get<any>('http://authentication-web_laravel-angular.test/api/user', {headers: headers}).subscribe(
      (response) => this.user = response,
      (error) => {
        localStorage.removeItem('token');
        this.router.navigate(['/login'])
      }
    );
  }

}
