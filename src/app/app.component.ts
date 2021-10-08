import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  formArray = new FormGroup({
    'hobbies': new FormArray([])
  });
  constructor() { }
  ngOnInit() {
  }
  addFormArray() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.formArray.get('hobbies')).push(control);
  }
}
