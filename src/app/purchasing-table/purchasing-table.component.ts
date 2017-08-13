import { Component, OnInit, OnDestroy,enableProdMode } from '@angular/core';
import { PostDataService } from 'app/services/post-data.service';
import { GetDataService } from 'app/services/get-data.service';

enableProdMode ();

let mockData = {
    theads: [
      "供应商", "货号", "单价", "VARIATION ID", "ITEM SKU(父SKU)", "VARIATION SKU(子SKU)", "VARIATION NAME", "订单编号", "采购总数", "金额"
    ],
    datas:[
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P", "2222222P" ],
            purchasAmount: 10,
            toltalPrice: 90
          },
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P", "2222222P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P", "2222222P" ],
            purchasAmount: 10,
            toltalPrice: 90
          },
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P", "2222222P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P", "2222222P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P"],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      },
      {
        supplier: "深圳市",
        ArtNo: "639#",
        price: 9,
        itemSku: "G00361",
        children: [
          {
            variationId: "G00361A",
            variationSku: "G00361A",
            variationName: "iphone6s 土豪金",
            ordersns: [ "1111111P" ],
            purchasAmount: 10,
            toltalPrice: 90
          }
        ]
      }
    ]
  };

@Component({
  selector: 'app-purchasing-table',
  templateUrl: './purchasing-table.component.html',
  styleUrls: ['./purchasing-table.component.scss']
})
export class PurchasingTableComponent implements OnInit, OnDestroy {
  user: any = {
  	name: '张康金'
  };

  shops: any = [
  	{
  	  name: "示例店铺1",
  	  id: "00001"
  	},
  	{
  	  name: "示例店铺1",
  	  id: "00002"
  	}
  ]	

  ordersnStatus: any[] = [];
  ordersnList: any = {};
  repeteOrdersns: string[] = [];
  ordersnList_height: number = 290;
  data: any = mockData;
  staticsFail: string[] = [];
  ordersn_repete_alert_target: string;
  clientHeight: number;
  clientWidth: number;
  show_add_shop: boolean = false;
  alert: string;
  loading: boolean = false;
  submitReady: boolean = false;
  currentShop: string;
  saveReady: boolean = false;
  exportReady: boolean = false;

  constructor(
    private postData: PostDataService,
    private getData: GetDataService
  ) { }

  addOrdersn ( value: string, index ) {
    if ( !value ) {
      if ( this.ordersnList[ index ] ) {
        for ( let i = 0, len = this.ordersnStatus.length; i < len; i++ ) {
          if ( i != index && this.ordersnStatus[ i ].value === this.ordersnList[ index ] ) {
            this.ordersnList[ i ] = this.ordersnStatus[ i ].value;
            break;
          }
        }  

        this.ordersnList[ index ] = null
      }

      this.checkSubmitReady ();
      return;
    }

    let item;

    for ( item in this.ordersnList ) {
      if ( value === this.ordersnList[ item ] ) {
        return;
      }
    }

    if ( this.ordersnList[ index ] ) {
      for ( let i = 0, len = this.ordersnStatus.length; i < len; i++ ) {
        if ( i != index && this.ordersnStatus[ i ].value === this.ordersnList[ index ] ) {
          this.ordersnList[ i ] = this.ordersnStatus[ i ].value;
          break;
        }
      }  
    }  

    this.ordersnList[ index ] = value;
    this.checkSubmitReady ();
  }

  checkRepete ( value, index ) {
    if ( !value ) {
      this.ordersnStatus[ index ].repete = false;
      return false;
    }

    let item;

    for ( item in this.ordersnList ) {
      if ( value === this.ordersnList[ item ] && item !== index + "" ) { 
        this.ordersnStatus[ index ].repete = true;
        return true;
      }
    }

    this.ordersnStatus[ index ].repete = false;  
    return false;
  }

  checkSubmitReady () {
    let item;

    for ( item in this.ordersnList ) {
      if ( this.ordersnList[ item ] ) {
        this.submitReady = true;
        return;
      }
    }

    this.submitReady = false;
  }

  addShop ( shopInfo ) {
    this.loading = true;

    this.postData.addShop ( shopInfo )
                 .then ( this.afterAddShop ); 
  }

  getTable () {
    let obj = {
      ordersnList: []
    };

    let item;

    for ( item in this.ordersnList ) {
      if ( this.ordersnList[ item ] ) {
        obj.ordersnList.push ( this.ordersnList[ item ] );
      }
    }

    this.getData.getTable ( obj, this.currentShop )
                .then ()
  }

  submitOrdersnList () {
    if ( !this.submitReady ) {
      return;
    }  

    for ( let i = 0, len = this.ordersnStatus.length; i < len; i++ ) {
      if ( this.ordersnStatus[ i ].repete ) {
        this.alert = "ordersn_repete_report";  
        return;
      } 
    }  

    this.loading = true;
    this.getTable ();
  }

  afterAddShop ( rep: any ) {
    this.loading = false;

    if ( rep.text() === "success" ) {
      this.alert = "add_shop_success";
    } 
    else if ( rep.text() === "fail" ) {
      this.alert = "add_shop_fail";
    }
  }

  removeRepete () {
    for ( let i = 0, len = this.ordersnStatus.length; i < len; i++ ) {
      if ( this.ordersnStatus[ i ].repete && !this.ordersnList[ i ] ) {
        this.ordersnStatus[ i ].value = "";
      }
    }
  }

  afterGetTable ( rep: any ) {
    this.loading = false;

    if ( rep.json().data ) {
      let data = rep.json().data;
      this.data = data.tableData;
      this.staticsFail = data.fail;
    }
    else {
      this.alert = "get_table_fail";
    }
  }

  handleClientResize: any = ( function () {
    this.clientHeight = document.documentElement.clientHeight;
    this.clientWidth = document.documentElement.clientWidth;
  } ).bind ( this );

  ngOnInit() {
    this.getData.getShops()
                .then ( (function (rep) { 
                  if ( rep.text() === "fail" ) { 
                    this.alert = "get_shops_fail"  
                  }
                  else if ( rep.json().data ) {
                    this.shops = this.json().data.shops;
                    this.currentShop = this.shops[ 0 ].id;
                  }
                }).bind ( this ) );

    let _selt = this;

    for ( let i = 0; i < 200; i++ ) {
      this.ordersnStatus.push ( { value:"", repete: false, result: "" } );
    }

    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;

    let _self = this;
    window.addEventListener ( 'resize', this.handleClientResize );
  }

  ngOnDestroy () {
    window.removeEventListener ( 'resize', this.handleClientResize );
  }
}