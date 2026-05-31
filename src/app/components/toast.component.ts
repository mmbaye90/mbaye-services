import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-overlay"
      [style.opacity]="toast ? '1' : '0'"
      [style.transform]="toast ? 'translateX(0)' : 'translateX(100%)'"
      [style.pointer-events]="toast ? 'auto' : 'none'">
      <div class="toast" [class.success]="toast?.type === 'success'" [class.error]="toast?.type === 'error'">
        <span class="toast-icon">{{ toast?.type === 'success' ? '✓' : '✕' }}</span>
        <span class="toast-message">{{ toast?.message }}</span>
      </div>
    </div>
  `,
  styles: [`
    .toast-overlay {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 99999;
      transition: all 0.3s ease-out;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      border-radius: 4px;
      font-family: 'Karla', sans-serif;
      font-size: 0.95rem;
      color: #fff;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      min-width: 280px;
    }
    .toast.success {
      background: #1a3a2a;
      border-left: 4px solid #4ade80;
    }
    .toast.error {
      background: #3a1a1a;
      border-left: 4px solid #ef4444;
    }
    .toast-icon {
      font-size: 1.2rem;
      font-weight: 700;
    }
    .toast.success .toast-icon { color: #4ade80; }
    .toast.error .toast-icon { color: #ef4444; }
    .toast-message { flex: 1; }
  `]
})
export class ToastComponent implements OnInit, OnDestroy {
  private toastService = inject(ToastService);
  private sub?: Subscription;
  toast: Toast | null = null;

  ngOnInit(): void {
    this.sub = this.toastService.toast$.subscribe(t => this.toast = t);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
