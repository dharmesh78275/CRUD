

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StudentService {

    baseUrl = "http://localhost:4200/assets/";

    constructor(public http: Http) {
    }

    getStudent():Observable<any> {
        // return this.http.request(this.baseUrl+"student.json")
        return this.http.get("http://localhost:5555/Student")
        .map(this.extractData)
        .catch(this.handleErrorObservable);
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

}