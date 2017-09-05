import {NgModule,Optional, SkipSelf} from '@angular/core';

import { RouterModule } from '@angular/router';
import {routes} from './routes';

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    declarations:[],
    exports:[]
})

export class RoutesModule {

    
}