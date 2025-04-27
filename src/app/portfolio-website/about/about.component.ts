import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BrowserAnimationsModule,ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateX(100%)' })),
      ]),
    ])
  ]
})
export class AboutComponent {
 
}
