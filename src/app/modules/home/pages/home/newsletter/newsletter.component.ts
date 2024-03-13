import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { EmailService } from '../../../services/email.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { SubscribeModalComponent } from 'src/app/shared/modules/layout/components/subscribe-modal/subscribe-modal.component'

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  emailForm!: FormGroup
  isSubmitting: boolean = false
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  constructor(private formBuilder: FormBuilder, private emailService: EmailService, private modalService: NgbModal) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegex)]],
    })
  }

  onSubmit() {
    const { email } = this.emailForm.value
    console.log('onSubmit() works', email)

    if (!email) {
      console.log('Error sending email')
      return
    } else {
      console.log('Email sent successfully: ', email)
      this.isSubmitting = true
      this.emailService.sendEmail(email)

      this.modalService.open(SubscribeModalComponent)
    }
  }
}
