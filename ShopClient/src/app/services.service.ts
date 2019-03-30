import { Injectable } from '@angular/core';
import { server_url } from './configs/const';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { URLSearchParams, Http, Response, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
declare var $: any;

@Injectable()
export class RestHandlerService {

  headers: Headers;
  options: RequestOptions;
  token: string;

  constructor(private http: Http, private router:Router) {
    //GET TOKEN
  }

  postData(data: any, path: string): Observable<any> {
    let body = new URLSearchParams();
    body.append('data', JSON.stringify(data));

    let headers = new Headers({
      'Content-Type': 'application/json',
    });
    let options = new RequestOptions({ headers });
    let url = server_url + path;

    return this.http.post(url, data, options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  getData(path: string): Observable<any> {
    let url = server_url + path;
    console.log('URL', url);
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getStock(){
    return this.http.get('http://localhost:3000/stock').map( data => data.json() );
  }

  getImage(){
    return this.http.get('http://localhost:3000/getPicture').map( data => data.json() );
  }

}
export class ServicesService { }
