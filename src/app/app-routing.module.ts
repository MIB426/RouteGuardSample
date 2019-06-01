import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard';
import { EnsureLoginGuard } from './login/ensure-login.guard';
const routes: Routes = [

  {
  path: '',
  component: LayoutComponent,
  canActivate: [LayoutGuard], // 加在這裡
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ]
},
{
  path: 'login',
  component: LoginComponent,
  canDeactivate: [EnsureLoginGuard]
},
{
  path: 'feature',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
