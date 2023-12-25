import { NgModule } from '@angular/core';
import { ShoppingListService } from './app/shopping-list/shopping-list.service';
import { RecipeService } from './app/recipes/recipe.service';
import { DataStorageService } from './app/shared/data-storage.service';
import { RecipesResolverService } from './app/recipes/recipes-resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/auth/auth.interceptor';
import { AuthGuard } from './app/auth/auth.guard';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    RecipesResolverService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthGuard
  ],
})
export class CoreModule {
}
