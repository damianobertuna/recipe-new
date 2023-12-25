import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'shopping-list',
  component: ShoppingListComponent,
  children: [
    {path: ':id/edit', component: ShoppingEditComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRouting {

}
