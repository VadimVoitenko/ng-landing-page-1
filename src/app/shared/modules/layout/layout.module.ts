import { TranslocoModule } from '@ngneat/transloco'

import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { CoreModule } from 'src/app/core/core.module'
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScheduleCardComponent],
  imports: [CommonModule, TranslocoModule, CoreModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ScheduleCardComponent],
})
export class LayoutModule {}
