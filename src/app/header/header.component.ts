import { Component, OnInit, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() condicionSelected = new EventEmitter<string>();
  onSelect(condicion: string){
    this.condicionSelected.emit(condicion);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
