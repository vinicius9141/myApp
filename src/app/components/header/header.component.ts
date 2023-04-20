import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private timeout: any = null;
  constructor(private router: Router) {}

  public searchGit(e: any) {
    if (e.key == 'Enter') {
      window.location.href = `/profile/${e.target.value}`;
    }
  }
}
