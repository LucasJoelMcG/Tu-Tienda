import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full'
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },
  {
    path: '**',
    redirectTo: 'features',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
