import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  clientHeight: number;	
  currentPage: string = "采购表";
  show: string = "hand-operated";

  constructor() { }

  ngOnInit() {
  	this.clientHeight = document.documentElement.clientHeight;
  	let _self = this;

  	window.addEventListener ( 'resize', function () {
  	  _self.clientHeight = document.documentElement.clientHeight;
  	} )
  }

}
