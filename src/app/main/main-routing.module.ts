import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children:
      [{
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'apiendpoint',
        loadChildren: () => import('./api-endpoint/api-endpoint.module').then(m => m.ApiEndpointModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
