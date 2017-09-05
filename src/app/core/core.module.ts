import {NgModule,Optional, SkipSelf} from '@angular/core';

/*module controller to check if any module is already exportded*/
import { throwIfAlreadyLoaded } from './module-import-guard';


/*Import Providers | Services*/
import {AccountsService} from './services/account.service';
import {HelperService} from './services/helper.service';

@NgModule({
    imports:[],
    declarations:[],
    exports:[],
    providers:[AccountsService,HelperService]
})

export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}