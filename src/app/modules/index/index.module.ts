import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [IndexComponent, CalendarComponent],
  imports: [CommonModule, IndexRoutingModule],
})
export class IndexModule {}
