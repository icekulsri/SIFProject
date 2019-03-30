import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestHandlerService } from '../services.service';
import { ui_url } from '../configs/const';

declare var $: any;
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
  providers: [RestHandlerService]
})
export class UserloginComponent implements OnInit {

  username: string;
  password: string;
  private sessionid: string;
  data: {};

  constructor(private restHandlerService: RestHandlerService, private router: Router) {
    this.username = "";
    this.password = "";
    localStorage.clear();
  }

  ngOnInit() {
    this.restHandlerService.postData({}, '/mysession').subscribe(res => {
      this.sessionid = res.sessionid;
    })
  }

  loginVerify(): void {
    this.restHandlerService.postData({
      username: this.username,
      password: this.password,
      sessionid: this.sessionid
    }, '/login').subscribe(res => {
      if (res.success) {
        localStorage.setItem('session', JSON.stringify({ sessionid: this.sessionid }));
        this.restHandlerService.postData({
          username: this.username,
          password: this.password,
          sessionid: this.sessionid
        }, '/checkType').subscribe(res => {
          if (res[0].TypeUser=="company") {
            $(location).attr('href', ui_url + '/company');
          }
          else if(res[0].TypeUser=="department") {
            $(location).attr('href', ui_url + '/department');
          }
          else {
            alert('Your username or Password incorect! test')
          }
        });
      }
      else {
        alert('Your username or Password incorect!')
      }
    });
  }
}
