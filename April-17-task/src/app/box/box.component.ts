import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  study: string[] = [
    "B.com",
    "B.sc",
    "BTech",
    "MTech",
    "M.sc"
  ];
}
