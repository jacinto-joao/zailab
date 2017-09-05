
import {LayoutsComponent} from './../layouts/layouts.component';

export const routes = [
	{
		path: '',
		component:LayoutsComponent,
		children: [
            { path: '', redirectTo: 'accounts', pathMatch: 'full' },
            { path: 'accounts',  loadChildren: './accounts/accounts.module#AccountsModule'},
        ]
	}
];