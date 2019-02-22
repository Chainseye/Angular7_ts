import { Component, OnInit } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { slideInAnimation } from '../animation/animations';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [slideInAnimation]
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
