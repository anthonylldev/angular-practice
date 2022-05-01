import { Component, OnInit } from '@angular/core';
import {
  faUser, faSearch, faShoppingCart, faBars
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  bars = faBars;

  companyName: string = "Leon-Shopping."
  user: string = "Username";

  constructor() { }

  ngOnInit(): void {
  }

}
