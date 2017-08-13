import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
	clientHeight: number;
  	clientWidth: number;

	constructor() { };

	handleClientResize: any = ( function () {
		this.clientHeight = document.documentElement.clientHeight;
		this.clientWidth = document.documentElement.clientWidth;
	} ).bind ( this );

	ngOnInit() {
		this.clientWidth = document.documentElement.clientWidth;
    	this.clientHeight = document.documentElement.clientHeight;

	    window.addEventListener ( 'resize', this.handleClientResize );
	}

	ngOnDestroy () {
		window.removeEventListener ( 'resize', this.handleClientResize );
	}

}
