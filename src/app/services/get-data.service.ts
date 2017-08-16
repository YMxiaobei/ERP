import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetDataService {
	host: string = "http://121.43.179.177/order/";
	API_getTable: string = "index.php/API2/getTable";
	API_getShops: string = "index.php/API2/getShops";
	API_getExcel: string = "index.php/API2/getExcel";
	API_getPage: string = "index.php/API2/getPage";
	API_getOrdersnList: string = "index.php/API2/getOrdersnList"
	header: Headers = new Headers ( {'Content-Type':'application/json'} );
	option: RequestOptionsArgs = {headers: this.header};

	constructor( private http: Http ) { }

	getTable ( ordersnList: any, shopId: string ) {
		let url = this.host + this.API_getTable + "/" + shopId;

		console.log ( ordersnList );

		return this.http.post ( url, ordersnList, this.option )
				   .toPromise ()
				   .catch ( function ( err ) { console.log ( err ) } );	
	}

	getShops ( ) {
		let url = this.host + this.API_getShops;

		return this.http.get( url )
						.toPromise ()
						.catch ( function ( err ) { console.log ( err ) } );
	}

	getExcel ( data: string ) {
		let url = this.host + this.API_getExcel;

		return this.http.post ( url, data, this.option )
						.toPromise ()
						.catch ( function ( err ) { console.log ( err ) } );	
	}

	getOrdersnList ( start: string, end: string, shopId: string, type: string ) {
		let url = this.host + this.API_getOrdersnList + "/" + start + "/" + end + "/" + shopId + "/" + type;

		return this.http.get ( url )
						.toPromise ()
						.catch ( function ( err ) { console.log ( err ) } );
	}

	getPage ( newPagination ) {
		let url = this.host + this.API_getPage + "/" + newPagination;

		return this.http.get ( url )
						.toPromise ()
						.catch ( function ( err ) { console.log ( err ) } );				
	}
}
