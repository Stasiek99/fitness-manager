import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

import {Meal} from "../../../shared/services/meals/meals.service";

@Component({
  selector: 'app-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
})
export class MealFormComponent {
  @Output() create = new EventEmitter<any>()

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([""])
  });
  constructor(private fb: FormBuilder) {
  }

  get required() {
    return (
      this.form.get("name")?.hasError("required") &&
      this.form.get("name")?.touched
    )
  }

  get ingredients() {
    return this.form.get("ingredients") as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(new FormControl(""));
  }

  removeIngredients(index: number): void {
    this.ingredients.removeAt(index);
  }

  createMeal(): void {
    if(this.form.valid) {
      this.create.emit(this.form.value);
    }
  }
}
