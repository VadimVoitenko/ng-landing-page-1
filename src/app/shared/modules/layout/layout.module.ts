import { TranslocoModule } from '@ngneat/transloco'

import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'

import { CoreModule } from 'src/app/core/core.module'
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component'
import { VideoModalComponent } from './components/video-modal/video-modal.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScheduleCardComponent, VideoModalComponent],
  imports: [CommonModule, TranslocoModule, CoreModule, RouterModule, MatIconModule],
  exports: [HeaderComponent, FooterComponent, ScheduleCardComponent],
})
export class LayoutModule {}
