import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'forum', component: ForumComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
