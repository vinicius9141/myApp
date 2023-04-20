import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  public getUser(data: { user: string }): Observable<any> {
    return this.http.get(`${this.baseUrl}/${data.user}`);
  }

  public getRepos(data: { user: string }): Observable<any> {
    return this.http.get(`${this.baseUrl}/${data.user}/repos`);
  }
}
