import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { PipeComponent } from './pipe/pipe.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      {path: ':id/edit', component: ShoppingEditComponent}
    ]
  },
  {path: 'auth', component: AuthComponent},
  {path: 'form-td', component: FormTdComponent},
  {path: 'form-reactive', component: FormReactiveComponent},
  {path: 'pipe', component: PipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
