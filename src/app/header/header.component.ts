import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CopyContentService } from '../shared/copy-content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private render: Renderer2,
    public copyContent: CopyContentService
  ) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let setHeaderStyle = document.querySelector('.header');
    let setHeaderLogoStyle = document.querySelector('.header-logo');

    if (window.pageYOffset > 10) {
      this.render.addClass(setHeaderStyle, 'header-after');
      this.render.addClass(setHeaderLogoStyle, 'header-after-logo');
    } else {
      this.render.removeClass(setHeaderStyle, 'header-after');
      this.render.removeClass(setHeaderLogoStyle, 'header-after-logo');
    }
  }
}
