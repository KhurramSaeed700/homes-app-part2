import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home Page'
    },
    {
        path:'details/:id', //:id is just a placeholder for parameter value
        component:DetailsComponent,
        title:'Details Page'
    }
];
