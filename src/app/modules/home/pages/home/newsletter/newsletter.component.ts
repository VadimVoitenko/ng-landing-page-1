import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { EmailService } from '../../../services/email.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { SubscribeModalComponent } from 'src/app/shared/modules/layout/components/subscribe-modal/subscribe-modal.component'

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  emailForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private emailService: EmailService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  // email = new FormControl('', [Validators.required, Validators.email])

  sendEmail() {
    console.log('sendForm() works')
    // if (this.emailForm.valid) {
    //   const emailData = this.emailForm.value
    //   this.emailService.sendEmail(emailData).subscribe(
    //     (response) => {
    //       console.log('Email sent successfully: ', response)
    //       this.emailForm.reset()
    //     },
    //     (error) => {
    //       console.error('Error sending email: ', error)
    //     },
    //   )
    // }
  }
  
  openModal() {
    this.modalService.open(SubscribeModalComponent)
  }
}
