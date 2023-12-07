import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Double Cheeseburger',
      'McDonald\'s double cheeseburger',
      'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42-500x500.jpg',
      [
        new Ingredient('bread', 2),
        new Ingredient('hamburger', 2),
        new Ingredient('cheese', 2)
        ]
    ),
    new Recipe(
      'Omelette',
      'Pisci d\'uovu',
      'https://www.olivetomato.com/wp-content/uploads/2016/02/SAM4952-1.jpg',
      [{name: 'eggs', amount: 2}, {name: 'cheese', amount: 1}, {name: 'onion', amount: 2}]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
