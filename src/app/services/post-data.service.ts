import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostDataService {
	host: string = "http://121.43.179.177/";
	API_addShop: string = "index.php/API2/addShop";
	API_saveTable: string = "index.php/API2/saveTable";
	header: Headers = new Headers ( {'Content-Type':'application/json'} );
	option: RequestOptionsArgs = { headers: this.header };

	constructor( 
		private http: Http
	) { }

	addShop ( shopInfo: any ) {
		let url = `${this.host}${this.API_addShop}/${shopInfo.shopAlias}/${shopInfo.partnerId}/${shopInfo.shopId}/${shopInfo.secrectKey}`;
		
		return this.http.get ( url )
						.toPromise ()
						.catch ( function (err) { console.log ( err ) } );
	}

	saveTable ( tableJson ) {
		let url = this.host + this.API_saveTable;

		return this.http.post ( url, tableJson, this.option )
						.toPromise ()
						.catch ( function (err) { console.log ( err ) } );
	}
}
