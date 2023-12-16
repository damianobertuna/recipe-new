import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.httpClient.put(
      'https://angular-project-9a634-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    ).subscribe(response => console.log(response));
  }
}
