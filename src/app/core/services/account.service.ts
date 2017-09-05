import { HelperService } from './helper.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IAccounts } from './../../shared/Interfaces/IAccounts';

@Injectable()
export class AccountsService {

    constructor(public helper:HelperService, public http:HttpClient) { }

    getAccounts(){
        return this.http.get<IAccounts>(this.helper.api+'accounts.json')
            .catch(this.helper.errorHandler);
    }
}