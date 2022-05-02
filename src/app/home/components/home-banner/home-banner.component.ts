import {Component, Input, OnInit} from '@angular/core';
import {IImage} from "../../../core/interfaces/image.iterface";

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {
  @Input() image?: IImage;

  constructor() { }

  ngOnInit(): void {
  }

}
