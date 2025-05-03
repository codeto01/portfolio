import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { info } from '../interface';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Info {
  name: string;
  email: number;
}
@Component({
  selector: 'app-direction',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule],
  templateUrl: './direction.component.html',
  styleUrl: './direction.component.scss'
})
export class DirectionComponent {
  datas:Info[]=[]
constructor(private http:HttpClient){}
ngOnInit(){
  const url="http://localhost:8080/getData";
  // this.http.get<any>(url).subscribe(data=>{
  //   this.datas=data
  // })
  this.http.get<any>(url).subscribe(data=>{
this.datas=data;
  })
}
}
