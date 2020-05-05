import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-schedule',
  templateUrl: './form-schedule.component.html',
  styleUrls: ['./form-schedule.component.scss'],
})
export class FormScheduleComponent implements OnInit {
  public form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(30)]],
    time: ['', Validators.required],
    description: [''],
  });

  constructor(private fb: FormBuilder) {}

  get title() {
    return this.form.get('title');
  }

  get time() {
    return this.form.get('time');
  }

  get description() {
    return this.form.get('description');
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.form);
    if (this.form.status === 'VALID') {
      console.log(this.title.value, this.time.value, this.description.value);
    }
  }
}
