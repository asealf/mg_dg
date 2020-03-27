import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-navbar',
  templateUrl: './navbar.component.html',
  styles: [ '.color-coral {    background-color: #e6ecaf ;}' ]
})
export class NavbarComponent implements OnInit {

  activeNavbar = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleNavbar() {
    this.activeNavbar = !this.activeNavbar;
  }

}
