import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/services/calendar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  today: string;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.today = this.calendarService.getToday().formatted;
  }
}
