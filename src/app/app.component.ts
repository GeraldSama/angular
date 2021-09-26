import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';
  animales:any[]=[
    {tipo:'perro',nombre:'lisa',edad:10},
    {tipo:'gato',nombre:'pepon',edad:2},
    {tipo:'pato',nombre:'tanTan',edad:7}
  ]
}
