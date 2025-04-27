import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'scale(0.8) translateY(100px)', offset: 0 }),
          style({ opacity: 0.5, transform: 'scale(1.05) translateY(-10px)', offset: 0.7 }),
          style({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1.0 }),
        ]))
      ]),
    ]),
  ],
})
export class ContactComponent {
  
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('wrkexp') wrkexp!:ElementRef;
  showAboutSection:boolean=false;
  showExp:boolean=false;
  constructor() {}

  
  // Method to scroll to the about section
  scrollToAbout() {
    this.showAboutSection = true; // make it visible first
    setTimeout(() => {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // slight delay so element exists before scroll
  }

  scrollToExp() {
    this.showExp = true; // make it visible first
    setTimeout(() => {
      this.wrkexp.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // slight delay so element exists before scroll
  }
}
