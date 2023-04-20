import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private timeout: any = null;
  constructor(private router: Router) {}

  public searchGit(e: any) {
    if (e.key == 'Enter') {
      this.router.navigate([`/profile/${e.target.value}`]);
    }
  }
}
