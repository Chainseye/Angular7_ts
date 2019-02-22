import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/page/list',
    pathMatch: 'full'
  }, {
    path: 'page',
    component: PageComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    children: [{
      path: '',
      component: ListComponent
    }, {
      path: 'list',
      component: ListComponent,
      data: {
        animation: 'list'
      }
    }, {
      path: 'add',
      component: AddComponent,
      data: {
        animation: 'add'
      }
    }]
  },
  { path: '**', redirectTo: '/page/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
