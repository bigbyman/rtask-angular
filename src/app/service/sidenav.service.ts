import { Injectable } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav;
  constructor() { }

  public toggle(): void {
    this.sidenav.toggle();
  }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }
}
