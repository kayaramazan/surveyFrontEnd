import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuType: any;
  constructor() {
    console.log('calisti',this.menuType)
   }

  ngOnInit(): void {
  }

}
