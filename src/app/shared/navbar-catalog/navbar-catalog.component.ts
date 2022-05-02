import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar-catalog',
  templateUrl: './navbar-catalog.component.html',
  styleUrls: ['./navbar-catalog.component.scss']
})
export class NavbarCatalogComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
