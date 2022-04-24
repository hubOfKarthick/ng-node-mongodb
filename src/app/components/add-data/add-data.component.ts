import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app-service.service';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html'
})
export class AddDataComponent implements OnInit {
  titleValue = '';
  descriptionValue = '';
  existingValue;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: AppService
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(queries => {
      if (queries.hasOwnProperty('id')){
        this.apiService.getStoryById(queries['id']).subscribe(res => {
          this.existingValue = res;
          this.titleValue = this.existingValue.title;
          this.descriptionValue = this.existingValue.description;
        });
      }
    });
  }
  getPublishedStatus(value) {
    let returnString = '';
    if (value) {
      returnString = 'Yay! It\'s Published.';
    } else {
      returnString = 'Pending'
    }
    return returnString;
  }
  getPrepopulatedValues(value) {
  }
  deleteStory() {
    this.validateDetails();
    this.apiService.deleteStoryById(this.existingValue.id).subscribe((res: any) => {
     if (res.hasOwnProperty('message')){
       if ((res.message).toLowerCase().includes('successfully')) {
         alert('Your story is deleted successfully');
         this.router.navigate(['stories']);
       }
     }
    })
  }
  updateStory() {
    this.validateDetails();
    this.apiService.updateStoryById(
      {
        title: this.titleValue,
        description: this.descriptionValue,
        published: (this.existingValue.hasOwnProperty('published') )? this.existingValue.published : false
      },
      this.existingValue.id
    ).subscribe(res => {
      if (res) {
        this.router.navigate(['stories']);
      }
      
    })
  }
  validateDetails() {
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated')
        }, false)
      })
  }
  addNewStory() {
    this.validateDetails();
    if (this.titleValue !== '' || this.descriptionValue !== ''){
      this.apiService.createNewStory(
        {
          title: this.titleValue,
          description: this.descriptionValue,
          published: false
        }
      ).subscribe(res => {
        if (res){
          this.router.navigate(['stories']);
        }
        
      });
    }
  }
}
