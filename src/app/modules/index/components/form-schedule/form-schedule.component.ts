import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-schedule',
  templateUrl: './form-schedule.component.html',
  styleUrls: ['./form-schedule.component.scss']
})
export class FormScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  handleSubmit(event) {
    event.preventDefault();
  }

}
