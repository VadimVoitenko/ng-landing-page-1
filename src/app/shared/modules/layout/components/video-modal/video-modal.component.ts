import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer?: ElementRef
  isMuted: boolean = true

  constructor(public activeModal: NgbActiveModal) {}

  ngAfterViewInit(): void {
    this.videoPlayer?.nativeElement.addEventListener('ended', () => {
      this.activeModal.close()
    })
  }
}
