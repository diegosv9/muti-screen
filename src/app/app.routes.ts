import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';

export const routes: Routes = [
    {
        path: 'main',
        pathMatch: 'full',
        component: MainPageComponent,
    },
    {
        path: 'secondary',
        pathMatch: 'full',
        component: SecondaryPageComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main',
    },
    {
        path: '**',
        redirectTo: 'main',
    }
];
