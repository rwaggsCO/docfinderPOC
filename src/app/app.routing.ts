import { Routes, RouterModule } from '@angular/router';
import { DocFinderComponent } from "./doc-finder/doc-finder.component";

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/doc-finder', pathMatch: 'full' },
    { path: 'doc-finder', component: DocFinderComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
