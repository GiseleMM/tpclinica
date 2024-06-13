import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHomeComponent } from './componentes/nav-home/nav-home.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
 
  title = 'tpclinica';
  firestore=inject(Firestore);
  
  ngOnInit(): void {

let coleccion=collection(this.firestore,"test");
collectionData(coleccion,{idField:"id"}).subscribe(c=>{
  console.log(c);
})
  }

}
