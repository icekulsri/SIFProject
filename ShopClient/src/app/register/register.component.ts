import { Component, OnInit } from '@angular/core';
import { RestHandlerService } from '../services.service';
import { Router } from '@angular/router';
import { ui_url } from '../configs/const';

declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RestHandlerService]
})
export class RegisterComponent implements OnInit {
  Firstname: string;
  Lastname: string;
  Username: string;
  Password: string;
  Email: string;
  Birthday: Date;
  Gender: string;
  typeUser: string;

  constructor(private restHandlerService: RestHandlerService, private router: Router) {
    this.Firstname = "";
    this.Lastname = "";
    this.Username = "";
    this.Password = "";
    this.Email = "";
    this.Birthday = new Date();
    this.Gender = 'M';
    this.typeUser = "";
  }

  ngOnInit() {

  }

  register(): void {
    let lengthFirstname = this.Firstname.split('');
    let fname = this.Firstname.split(" ");
    if (fname.length == 1 && fname[0] != "" && lengthFirstname.length <= 20) {
      let fresult = /^[a-zA-Z ]+$/.test(fname[0]);          //check syntax/lenght firstname
      if (fresult) {
        let lengthLastname = this.Lastname.split('');
        let lname = this.Lastname.split(" ");
        if (lname.length == 1 && lname[0] != "" && lengthLastname.length <= 20) {
          let lresult = /^[a-zA-Z ]+$/.test(lname[0]);      //check syntax/lenght lastname
          if (lresult) {
            let lengthUsername = this.Username.split('');
            if (lengthUsername.length <= 20 && lengthUsername.length != 0) {              //check lenght username
              let birth = this.Birthday.toString().split('-');
              if (birth.length == 3) {                      //check syntax birthday
                let f = this.Gender.split('').length;
                if (f == 1) {                                   //check your gender
                  this.Gender = 'Male';
                }
                else {
                  this.Gender = 'Female';
                }
                if (this.typeUser.toLowerCase() == "company") {                                   //check your gender
                  this.typeUser = 'company';
                  let m1 = this.Email.split('@');
                  let m2 = m1[1].split('.');
                  if (m1.length == 2 && m2.length == 2) {             //check syntax email
                    this.restHandlerService.postData({
                      RegisterFirstname: this.Firstname,
                      RegisterLastname: this.Lastname,
                      RegisterUsername: this.Username,
                      RegisterPassword: this.Password,
                      RegisterEmail: this.Email,
                      RegisterBirthday: this.Birthday,
                      RegisterGender: this.Gender,
                      RegisterTypeUser: this.typeUser
                    }, '/insertRegister').subscribe(res => {
                      if (res.protocol41) {
                        $(location).attr('href', ui_url + "/");
                      }
                      else {
                        alert('Please check your information!')
                      }
                    })
                  }
                  else {
                    alert('Your Email incorrect! Please try again.');
                  }
                }
                else if (this.typeUser.toLowerCase() == "department") {
                  this.typeUser = 'department';
                  let m1 = this.Email.split('@');
                  let m2 = m1[1].split('.');
                  if (m1.length == 2 && m2.length == 2) {             //check syntax email
                    this.restHandlerService.postData({
                      RegisterFirstname: this.Firstname,
                      RegisterLastname: this.Lastname,
                      RegisterUsername: this.Username,
                      RegisterPassword: this.Password,
                      RegisterEmail: this.Email,
                      RegisterBirthday: this.Birthday,
                      RegisterGender: this.Gender,
                      RegisterTypeUser: this.typeUser
                    }, '/insertRegister').subscribe(res => {
                      if (res.protocol41) {
                        $(location).attr('href', ui_url + "/");
                      }
                      else {
                        alert('Please check your information!')
                      }
                    })
                  }
                  else {
                    alert('Your Email incorrect! Please try again.');
                  }
                }
                else {
                  alert('Your type incorrect! Please try again.');
                }
              }
              else {
                alert('Your birthday incorrect! Please try again.');
              }
            }
            else {
              alert('Your firstname is more 20 characters. Please try again!');
            }
          }
          else if (lengthLastname.length > 20) {
            alert('Your firstname is more 20 characters. Please try again!');
          }
          else {
            alert('Your lastname incorrect! Please try again.');
          }
        }
        else {
          alert('Your lastname incorrect! Please try again.');
        }
      }
      else {
        alert('Your firstname incorrect! Please try again.');
      }
    }
    else if (lengthFirstname.length > 20) {
      alert('Your firstname is more 20 characters. Please try again!');
    }
    else {
      alert('Your firstname incorrect! Please try again.');
    }
  }
}
