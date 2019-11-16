import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadCondicion = 'cursos';
  

  OnNavigate(condicion: string){
    this.loadCondicion = condicion;
  }

  title = 'curso-angular';
}
