import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-extended',
  templateUrl: './item-extended.component.html',
  styleUrls: ['./item-extended.component.scss']
})
export class ItemExtendedComponent implements OnInit {
  idItem?: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idItem = this.route.snapshot.paramMap.get('idItem') ?? undefined;
  }

}
