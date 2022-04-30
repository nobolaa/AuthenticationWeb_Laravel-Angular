import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  authenticationURL = 'http://localhost:8000/oauth/token';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email:'',
      password:''
    });
  }

  submit(){
    const formData = this.form.value;

    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'KwKJnBFw0Q6luee4egvAc8ogfNDckQfeWfBTRleB',
      scope: '*'
    }

    this.http.post<any>(this.authenticationURL, data).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }

}
