import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { VideoModalComponent } from 'src/app/shared/modules/layout/components/video-modal/video-modal.component'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  constructor(private modalService: NgbModal) {}

  openVideoModal() {
    const modalRef = this.modalService.open(VideoModalComponent)
  }
}
