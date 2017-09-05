import {NgModule,Optional, SkipSelf} from '@angular/core';

/*module controller to check if any module is already exportded*/
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
    imports:[],
    declarations:[],
    exports:[]
})

export class CoreModule {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}