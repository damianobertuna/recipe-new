import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'description test', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Chicken-Tikka-99647a6.jpg?quality=90&resize=556,505')
  ];

  constructor() {
  }

  ngOnInit() {

  }
}
