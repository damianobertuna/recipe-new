import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length > 0) {
      return recipes;
    } else {
      return this.dataStorageService.fetchRecipes();
    }
  }

}
