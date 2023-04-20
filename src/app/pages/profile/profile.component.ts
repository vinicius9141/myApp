import { GitHubService } from 'src/app/services/git-hub.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public userParam: string = '';
  public user: any = null;
  public repos: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private gitHubService: GitHubService
  ) {}

  ngOnInit() {
    this.userParam = this.route.snapshot.params['user'];
    this.gitHubService.getUser({ user: this.userParam }).subscribe((info) => {
      this.user = info;
    });
    this.gitHubService.getRepos({ user: this.userParam }).subscribe((repos) => {
      this.repos = repos.map((item: any) => {
        return { ...item, days: this.differenceDay(item.updated_at) };
      });
    });
  }

  private differenceDay(date: string) {
    const timstamp = new Date(date);
    const mlSeconds = new Date().getTime() - timstamp.getTime();
    return Math.floor(mlSeconds / (1000 * 60 * 60 * 24));
  }
}
