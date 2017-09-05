import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class HelperService {
    public api = '/assets/data/json/';
    
    public extractData(res: Response) {
        let body = res.json();
    }

    public errorHandler(error: HttpErrorResponse | any) {
        let errMsg: string;
        if (error.error instanceof Error) {
            errMsg = 'Something Went wrong, Please try again or refresh the page. If the error persist contact our support team!';
        } else {
            if (error.status == 401 && error.statusText === 'Unauthorized') {
                localStorage.removeItem('token');
            } else if (error.status == 422) {
                errMsg = error.error;
            } else if (error.status == 503) {
                errMsg = error.status;

            } else if (error.status == 500) {
                errMsg = error.status;
            } else if (error.status == 404) {
                errMsg = error.status;
            } else if (error.status == 0) {
                errMsg = error.status;
            } else {
                console.log(error);
                errMsg = error.status;
            }

            //errMsg = 'Server side Error';
        }
        return Observable.throw(errMsg);
    }
}