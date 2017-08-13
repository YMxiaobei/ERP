import { Component, OnInit, OnDestroy, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input () width: number = 500;
	@Input () height: number = 220;
	@Input () title: string = "警告";
	@Input () txtStyle: any = {
		color: "green"
	};
	@Input () txt: string = "上传成功";
	@Input () noTxt: string = "取消";  
	@Input () yesTxt: string = "确认";
	@Input () yesTitle: string = "";
	@Input () noTitle: string = "";

	@Output () yes: EventEmitter<any> = new EventEmitter ();
	@Output () no: EventEmitter<any> = new EventEmitter ();

	clientHeight: number;
  	clientWidth: number;
  	opacity: number = 0;
	marginTop: number = 150;

    constructor() { }

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

	ngAfterViewInit () {
		let _self = this;	

    	setTimeout ( function () {
    		_self.opacity = 1;
    		_self.marginTop = 200;
    	}, 100 );
	}

}
