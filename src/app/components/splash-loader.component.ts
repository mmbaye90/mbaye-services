import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader" *ngIf="visible">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  `,
  styles: [`
    .loader {
      position: fixed;
      z-index: 10000;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .spinner {
      width: 50px;
      height: 50px;
      position: relative;
    }
    .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #ccff00;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    .double-bounce2 {
      animation-delay: -1.0s;
    }
    @keyframes sk-bounce {
      0%, 100% { transform: scale(0); }
      50% { transform: scale(1); }
    }
  `]
})
export class SplashLoaderComponent implements OnInit {
  visible = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = false;
    }, 600);
  }
}
