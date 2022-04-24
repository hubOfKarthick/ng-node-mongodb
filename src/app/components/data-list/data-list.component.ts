import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent implements OnInit {
  storiesList;
  dataToShow;
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appService.getAllStories().subscribe((res) => {
      this.storiesList = res;
      this.dataToShow = res[0];
    });
  }

  getPublishedStatus(value){
    let returnString = '';
    if (value){
      returnString = 'Congratulations! Your story is published.';
    } else {
      returnString = 'Oops! Your story is not published yet.'
    }
    return returnString;
  }

  routeTo(path){    
    this.router.navigate([path], {
      queryParams: {
        id: this.dataToShow.id
      }
    });
  }

  removeAll(){
    this.appService.deleteAllStory().subscribe(res => {
      if (res){
        this.router.navigate(['stories']);
      }
    });
  }

}
