import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scrollToMedia() {
    const mediaComponent = document.getElementById('media')
    if (mediaComponent) {
      mediaComponent.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }
}
