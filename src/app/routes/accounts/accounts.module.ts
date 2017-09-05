import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

/*components*/
import {AccountGridComponent} from './account-grid-component/account-grid.component';

const routes:Routes = [
    {
        path:'',component:AccountGridComponent
    }
];

@NgModule({
	imports:[
	SharedModule,
	RouterModule.forChild(routes)
	],
	declarations:[
        AccountGridComponent
	],
	exports:[RouterModule] 
})

export class AccountsModule {

}