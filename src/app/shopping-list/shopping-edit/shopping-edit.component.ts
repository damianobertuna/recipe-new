import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddItem(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.editMode = false;
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing
      .subscribe((index) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.ingredient = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        });
        console.log(this.ingredient);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
