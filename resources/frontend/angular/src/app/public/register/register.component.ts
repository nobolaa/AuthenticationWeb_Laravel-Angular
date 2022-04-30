import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, 
            private http: HttpClient,
            private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    });
  }

  submit(){
    const formData = this.form.value;

    this.http.post<any>('http://authentication-web_laravel-angular.test/api/user', formData).subscribe(
      (response) => this.router.navigate(['/login']),
      (error) => console.log(error)
    );
  }
}
