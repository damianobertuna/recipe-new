import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css',
})
export class FormReactiveComponent implements OnInit {
  signUpForm: FormGroup;
  invalidName = 'Test';

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'projectName': new FormControl(
        '',
        [Validators.required],
        this.invalidProjectName.bind(this)
      ),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });

    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value.projectName);
    console.log(this.signUpForm.value.email);
    console.log(this.signUpForm.value.projectStatus);
  }

  invalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === this.invalidName) {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
