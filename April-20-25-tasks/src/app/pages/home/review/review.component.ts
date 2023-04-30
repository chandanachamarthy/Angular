import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  reviewForm: any;
  id: any;


  constructor(private fb: FormBuilder, private hs: HomeService, private ar: ActivatedRoute) {
    this.reviewForm= this.fb.group({
      name: [''],
      review: ['']

    });

    this.ar.params.subscribe(
      {
        next: (params) => {
          this.id = params['id']

        },
        error: () => this.id = 0
      }
    )

  }
saveReview() {
    var temp: any = {

      product_id: this.id,
      review: this.reviewForm.value.review,
      name: this.reviewForm.value.name

    }

    this.hs.postDetails(temp).subscribe(
      {
        next: data => {
          alert('Your Feedback is saved')
          location.reload();
        },
        error: (error) => alert('Not saved ---some Error')
      }

    )

  }

}