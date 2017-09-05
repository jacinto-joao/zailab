import { Component, OnInit } from '@angular/core';


/*Services*/
import { AccountsService } from './../../../core/services/account.service';

/*interfaces*/
import { IAccounts } from './../../../shared/Interfaces/IAccounts';

@Component({
    selector: 'zailab-account-grid-component',
    templateUrl: 'account-grid.component.html',
    styleUrls:['account-grid.component.scss']
})

export class AccountGridComponent implements OnInit {
    withdraw:boolean = true;
    accounts:IAccounts[] = [];
    constructor(public _accounts:AccountsService) { }

    getAccounts(){
        return this._accounts.getAccounts().subscribe(res =>{
           this.accounts = res.accounts;
        })
    }

    withdrawCash($ev:any, withdraw:any){
        $ev.preventDefault();
        console.log(withdraw);
        
        this.withdraw = false;
    }

    save(){
        this.withdraw = true;
    }

    ngOnInit() { 
        this.getAccounts();
    }
}