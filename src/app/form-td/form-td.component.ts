import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrl: './form-td.component.css'
})
export class FormTdComponent {
  defaultSubscription = 'advanced';
  @ViewChild('f') signUpForm: NgForm;

  onSubmit() {
    console.log(this.signUpForm.value.userData.email);
    console.log(this.signUpForm.value.userData.password);
    console.log(this.signUpForm.value.userData.subscription);
  }
}
