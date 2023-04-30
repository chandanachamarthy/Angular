import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value1:number= 0;
  value2:number=60000;
  servicelist: any;
  products: any
  types: string[] = [
    "All",
    "groceries",
    "cosmetics",
    "books"
  ]
  selected: string = "All"
  constructor(private hs: HomeService) {
    this.hs.getServices().subscribe(
      {
        next: (data: any) => this.servicelist = data,
        error: () => this.servicelist = []
      }
    )
    
  //   this.hs.getServices().subscribe(
  //     {
  //       next: (data: any) => this.products= data
  //     }
  //   )
  }
  
}