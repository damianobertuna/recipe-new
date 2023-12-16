import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  private apiUrl = 'https://angular-project-9a634-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.httpClient.put(
      this.apiUrl,
      recipes
    ).subscribe(response => console.log(response));
  }

  fetchRecipes() {
    return this.httpClient
      .get<Recipe[]>(this.apiUrl)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ?? []}
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
