import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './auth-guard.service';

/**
 * appのルーティング
 */
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/moku',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
    ]
})

/**
 * appのルーティングモジュール
 */
export class AppRoutingModule {
}
