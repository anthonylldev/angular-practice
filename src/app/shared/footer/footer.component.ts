import { Component, OnInit } from '@angular/core';
import {
  faHome, faEnvelope, faPhone, faPrint
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faLinkedinIn,faTwitter, faDocker
} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faDocker = faDocker;

  constructor() { }

  ngOnInit(): void {
  }

}
