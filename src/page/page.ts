import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'page-component',
  templateUrl: './page.html'
})
export class PageComponent {
  @Input() pageTitle: string = '';
  @Input() pageSubTitle: string = '';
  @Input() showBackButton: boolean = false;

  constructor(public router: Router, public location: Location) {
  }

  get backUrl() {
    return this.router.url.substr(0, this.router.url.lastIndexOf('/'));
  }

  get canNavigateBack() {
    return this.backUrl.length > 0;
  }

  back() {
    this.location.back();
  }
}
