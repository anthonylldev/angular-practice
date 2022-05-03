import {Component, Input, OnInit} from '@angular/core';
import {ISection} from "../../../../core/interfaces/section.interface";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
@Input() section?: ISection
  constructor() { }

  ngOnInit(): void {
  }

}
