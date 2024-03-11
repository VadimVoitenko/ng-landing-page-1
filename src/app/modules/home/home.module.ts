import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'
import { ScheduleComponent } from './pages/home/schedule/schedule.component'
import { MediaComponent } from './pages/home/media/media.component'
import { ContactComponent } from './pages/home/contact/contact.component'
import { NewsletterComponent } from './pages/home/newsletter/newsletter.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [HomeComponent, ScheduleComponent, MediaComponent, ContactComponent, NewsletterComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule, ReactiveFormsModule],
})
export class HomeModule {}
