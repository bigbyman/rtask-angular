import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../../service/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sidenavService.toggle();
  }
}
