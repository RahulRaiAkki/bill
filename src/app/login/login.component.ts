import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  baseUrl = 'http://fun2tech.xyz:5000/login';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.httpClient.get(this.baseUrl + '/products').subscribe((res) => {
    //   console.log(res);
    // });

    // this.httpClient.post(this.baseUrl, {username: 'lakshya.punhani', password: 'lakshya123'})
    //   .subscribe(
    //     (val) => {
    //       console.log('POST call successful value returned in body',
    //         val);
    //     },
    //     response => {
    //       console.log('POST call in error', response);
    //     },
    //     () => {
    //       console.log('The POST observable is now completed.');
    //     });
  }
  submit(val) {
    console.log('val', val);
  }
}
