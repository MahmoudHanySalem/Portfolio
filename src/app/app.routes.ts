import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Resume } from './components/resume/resume';
import { Work } from './components/work/work';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: Home },
    {path: "Services" , component: Services},
    {path: "Resume" , component: Resume},
    {path: "Work" , component: Work},
    {path: "Contact" , component: Contact},
    { path: '**', redirectTo: '/home' }
];
