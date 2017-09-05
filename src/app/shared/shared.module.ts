import {NgModule,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations:[],
    exports:[
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
    ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}