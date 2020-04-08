import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/shared/services/calendar.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormScheduleComponent } from '../form-schedule/form-schedule.component';

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
  calendarArray: Date[][] = [];
  holidayArray: string[] = [];

  constructor(private calendarService: CalendarService, private modalService: ModalService) {}

  ngOnInit(): void {
    const today = this.calendarService.getToday();
    this.currentYear = today.year;
    this.currentMonth = today.month;
    this.currentDate = today.date;
    this.calendarArray = this.calendarService.getCalendarArray();
    this.setHoliday(this.currentYear);
  }

  setHoliday(year: number) {
    this.calendarService.getHoliday(year).subscribe(
      (data) => {
        this.holidayArray = data.items.map((item) => item.start.date);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  formatDate(date: Date) {
    return this.calendarService.formatDate(date);
  }

  isHoliday(targetDate: Date) {
    if (!this.holidayArray.length) return false;
    const { formatted } = this.calendarService.formatDate(targetDate);
    return this.holidayArray.includes(formatted);
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
    this.changeCalendar();
  }

  nextMonth() {
    this.currentMonth += 1;
    this.changeCalendar();
  }

  changeCalendar() {
    if (this.currentMonth < 1) {
      this.currentYear -= 1;
      this.currentMonth = 12;
      this.setHoliday(this.currentYear);
    }
    if (this.currentMonth > 12) {
      this.currentYear += 1;
      this.currentMonth = 1;
      this.setHoliday(this.currentYear);
    }
    this.calendarArray = this.calendarService.getCalendarArray({ year: this.currentYear, month: this.currentMonth });
  }

  openModal() {
    this.modalService.setModal(FormScheduleComponent);
    this.modalService.openModal();
  }
}
