import { Routes } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';

export const routes: Routes = [
    {
        path: "lazy",
        loadChildren: () => import("./lazy/lazy.module").then(m => m.LazyModule)
    },
    {
        path: "add-user",
        //component: AddUserComponent
        loadComponent: () => import("./user/add-user/add-user.component").then(c => c.AddUserComponent)
    }
];
