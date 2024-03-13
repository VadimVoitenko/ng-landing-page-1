import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create'

  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    this.http.post(this.apiUrl, email)
  }
}
