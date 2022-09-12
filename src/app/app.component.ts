import { style } from '@angular/animations';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./styles/main-button.scss', './styles/header.scss','./styles/page-transition.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router:Router,
              private dialog:MatDialog){}
/* Navigator to another Page */
goToPage(pageName:string):void{
  this.router.navigate([`${pageName}`]);
}
/*Disable CRUD Page button */
disable(){
  const ele = document.getElementById('crud-button');
  if (ele != null) {
      if (ele.style.visibility === 'visible') {
        ele.style.visibility = 'hidden';
      } else {
        ele.style.visibility = 'visible';
      }
    };
}
}

