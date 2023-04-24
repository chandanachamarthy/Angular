import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{BoxComponent } from './box/box.component'

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'April-17-task';
  constructor(public dialog1:MatDialog)
  {}
    openDialog1()
    {
      this.dialog1.open(BoxComponent);
    }
}

