import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { PipeComponent } from './pipe/pipe.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      {path: ':id/edit', component: ShoppingEditComponent}
    ]
  },
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
