import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PortfolioService } from '../services/portfolio.service';
import { ContactInfo, PortfolioData } from '../models/portfolio.model';
import { ToastService } from '../services/toast.service';
import { WEB3FORMS_KEY } from '../../env';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private http = inject(HttpClient);
  private toast = inject(ToastService);

  contactInfo?: ContactInfo;
  portfolioData?: PortfolioData;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;

  ngOnInit(): void {
    this.portfolioService.getPortfolioData().subscribe(data => {
      this.portfolioData = data;
      this.contactInfo = data.contact;
    });
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.loading = true;

    const fd = new FormData();
    fd.append('access_key', WEB3FORMS_KEY);
    fd.append('name', this.formData.name);
    fd.append('email', this.formData.email);
    fd.append('message', this.formData.message);
    fd.append('subject', 'Portfolio Contact - Nouveau message de ' + this.formData.name);

    this.http.post<{ success: boolean; message?: string }>('https://api.web3forms.com/submit', fd).subscribe({
      next: (data) => {
        if (data.success) {
          this.toast.show('Message sent successfully! I\'ll get back to you soon.', 'success');
          this.formData = { name: '', email: '', message: '' };
        } else {
          this.toast.show(data.message || 'Failed to send.', 'error');
        }
        this.loading = false;
      },
      error: (err) => {
        this.toast.show('Network error. Please try again later.', 'error');
        this.loading = false;
      }
    });
  }
}
