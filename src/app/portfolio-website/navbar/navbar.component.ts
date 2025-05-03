import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewChild } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
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
export class NavbarComponent {
  // @ViewChild ('wrkexp') wrkexp!:ElementRef;
  // showExp:boolean=false;
  // scrollToExp() {
  //   this.showExp = true; // make it visible first
  //   setTimeout(() => {
  //     this.wrkexp.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //   }, 100); // slight delay so element exists before scroll
  // } @Output() buttonClicked = new EventEmitter<void>();

  @ViewChild('wrkexp') wrkexp!:ElementRef;
  showAboutSection:boolean=false;
  showExp:boolean=false;
  myForm!:FormGroup;
constructor(private router:Router,private http:HttpClient,private fb:FormBuilder){}
// ngOnInit(){
//   this.myForm=this.fb.group({
//     name:[''],
//     email:['']
//   })
// }
  scrollToExp() {
    this.showExp = true; // make it visible first
    setTimeout(() => {
      this.wrkexp.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // slight delay so element exists before scroll
  }
  // cont(){
  // //  const data=this.myForm.value;
   
  //   const url="http://localhost:8080/getData";
  //   this.http.get<any>(url).subscribe({
  //     next:(response)=>{
  //       console.log(response)
  //     }
  //   })
  // }
}
