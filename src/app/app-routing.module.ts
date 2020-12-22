import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',
  loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'home',
    loadChildren:()=> import('./shared/components/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'admision',
    loadChildren:()=> import('./components/admision/amision.module').then(m=>m.AmisionModule)
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
