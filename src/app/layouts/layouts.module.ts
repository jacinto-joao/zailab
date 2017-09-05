import {NgModule} from '@angular/core';

/*Shared Module*/
import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { LayoutsComponent } from './layouts.component';

@NgModule({
    imports:[SharedModule],
    declarations:[
        HeaderComponent,
        LayoutsComponent
    ],
    exports:[]
})

export class LayoutsModule {

    
}