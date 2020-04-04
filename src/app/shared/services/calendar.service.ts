import { Injectable } from '@angular/core';
import { format, eachDayOfInterval, endOfWeek, eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns';

type FormatDate = {
  formatted: string;
  year: number;
  month: number;
  date: number;
};

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  formatDate(date: Date): FormatDate {
    const formatted = format(date, 'yyyy-MM-dd');
    const [y, m, d] = formatted.split('-');
    return {
      formatted,
      year: parseInt(y, 10),
      month: parseInt(m, 10),
      date: parseInt(d, 10),
    };
  }

  getCalendarArray(option?: { year: number; month: number }): Date[][] {
    let date: Date;
    if (option && option.year && option.month) {
      date = new Date(option.year, option.month - 1);
    } else {
      date = new Date();
    }
    const sundays = eachWeekOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });

    return sundays.map((sunday) =>
      eachDayOfInterval({
        start: sunday,
        end: endOfWeek(sunday),
      })
    );
  }

  getToday(): FormatDate {
    return this.formatDate(new Date());
  }
}
