import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  dayArray = ['日', '月', '火', '水', '木', '金', '土'];
  calendarArray: Date[][];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    const today = this.calendarService.getToday();
    this.currentYear = today.year;
    this.currentMonth = today.month;
    this.currentDate = today.date;
    this.calendarArray = this.calendarService.getCalendarArray();
  }

  formatDate(date: Date) {
    return this.calendarService.formatDate(date);
  }

  isToday(targetDate: Date) {
    const { month, date } = this.calendarService.formatDate(targetDate);
    const { month: thisMonth, date: today } = this.calendarService.getToday();
    return month === thisMonth && date === today;
  }

  isThisMonth(targetDate: Date | number) {
    if (typeof targetDate === 'number') {
      return targetDate === this.currentMonth;
    } else {
      const { month } = this.calendarService.formatDate(targetDate);
      return month === this.currentMonth;
    }
  }

  prevMonth() {
    this.currentMonth -= 1;
    if (this.currentMonth < 1) {
      this.currentYear -= 1;
      this.currentMonth = 12;
    }
    this.calendarArray = this.calendarService.getCalendarArray({ year: this.currentYear, month: this.currentMonth });
  }

  nextMonth() {
    this.currentMonth += 1;
    if (this.currentMonth > 12) {
      this.currentYear += 1;
      this.currentMonth = 1;
    }
    this.calendarArray = this.calendarService.getCalendarArray({ year: this.currentYear, month: this.currentMonth });
  }
}
