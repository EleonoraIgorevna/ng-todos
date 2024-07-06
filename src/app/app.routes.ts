import { Routes } from '@angular/router';
import { LayoutMainComponent } from "./layouts/layout-main/layout-main.component";
import { PageMainComponent } from "./pages/page-main/page-main.component";
import { PageErrorComponent } from "./pages/page-error/page-error.component";

export const routes: Routes = [
    {
        path: '', component: LayoutMainComponent, children: [
            { path: '', component: PageMainComponent },
            { path: '**', component: PageErrorComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
