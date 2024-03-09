import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss'],
})
export class ScheduleCardComponent {
  @Input() item: any
}
