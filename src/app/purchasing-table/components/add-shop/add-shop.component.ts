import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss']
})
export class AddShopComponent implements OnInit, AfterViewInit {
	@Output () close: EventEmitter<boolean> = new EventEmitter ();
	@Output () submit: EventEmitter<any> = new EventEmitter ();

	data: any = {
		shopAlias:"",
		partnerId: "",
		shopId: "",
		secrectKey: ""
	}

	opacity: number = 0;
	marginTop: number = 150;

    constructor() { }

    handleSubmit ( ready: boolean ) {
    	if ( !ready ) {
    		return;
    	}
    	else {
    		this.submit.emit ( this.data );
    		this.close.emit ( false );
    	}
    }

    ngOnInit() {
    		
    }

    ngAfterViewInit () {	
    	let _self = this;	

    	setTimeout ( function () {
    		_self.opacity = 1;
    		_self.marginTop = 200;
    	}, 100 );
    	
    }
}
