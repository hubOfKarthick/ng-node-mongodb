import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://localhost:3000';
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllStories() {
    return this.httpClient.get(this.baseUrl + '/api/stories');
  }

  public getStoryById(id) {
    return this.httpClient.get(
      `${this.baseUrl}/api/stories/${id}`
    );
  }

  public deleteStoryById(id) {
    return this.httpClient.delete(
      `${this.baseUrl}/api/stories/${id}`
    );
  }
  public deleteAllStory() {
    return this.httpClient.delete(
      `${this.baseUrl}/api/stories`
    );
  }

  public updateStoryById(requestData, id) {
    return this.httpClient.put(
      `${this.baseUrl}/api/stories/${id}`,
      requestData
    );
  }

  public createNewStory(requestData) {
    return this.httpClient.post(
      `${this.baseUrl}/api/stories`,
      requestData
    );
  }
}
