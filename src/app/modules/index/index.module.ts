import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IndexComponent } from './pages/index/index.component';
import { FormScheduleComponent } from './components/form-schedule/form-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, CalendarComponent, FormScheduleComponent],
  imports: [CommonModule, IndexRoutingModule, FormsModule, ReactiveFormsModule],
})
export class IndexModule {}
