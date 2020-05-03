import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-schedule',
  templateUrl: './form-schedule.component.html',
  styleUrls: ['./form-schedule.component.scss'],
})
export class FormScheduleComponent implements OnInit {
  public form = this.fb.group({
    title: [''],
    time: [''],
    description: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.form.get('title').value, this.form.get('time').value, this.form.get('description').value);
  }
}
