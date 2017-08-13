import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-controllor',
  templateUrl: './pagination-controllor.component.html',
  styleUrls: ['./pagination-controllor.component.scss']
})
export class PaginationControllorComponent implements OnInit {
  @Input() pagination_amount: number;
  @Input() set show_pagination_len ( value ) {
  	if ( value < 1 ) {
  		this._show_pagination_len = 1;
  	}
  	else if ( value > this.pagination_amount ) {
  		this._show_pagination_len = this.pagination_amount;
  	}
  	else {
  		this._show_pagination_len = value;
  	}
  }
  @Input() set current_pagination ( value: number ) {
  	if ( value < 1 || value > this.pagination_amount ) {
  		return;
  	}

  	let arr = [];
  	let len = this._show_pagination_len - 2;
  	let max = value + 2;
  	let min = max - len + 1;

  	if ( min < 2 ) {
  		max += ( 2 - min );
  		min = 2;
  	}
  	else if ( max > this.pagination_amount - 1 ) {
  		min -= ( max - ( this.pagination_amount - 1 ) );
  		max = this.pagination_amount - 1;
  	}

  	this.show_pre_omit = min > 2 ? true : false;
  	this.show_back_omit = max < this.pagination_amount - 1 ? true : false;
  	console.log ( "min:" + min );
  	console.log ( "max:" + max );

  	for ( let i = min; i <= max; i++ ) {
  		arr.push( i );
  	}

  	console.log ( arr );

  	this.show_paginations = arr;
  	this._current_pagination = value;
  }; 	

  @Output() page_change: EventEmitter<number> = new EventEmitter();

  inputting: boolean = false;
  show_pre_omit: boolean = false;
  show_back_omit: boolean = false;
  _current_pagination: number;
  _show_pagination_len: number = 2;
  show_paginations: any;

  constructor() { }

  handlePageChange ( newPagination: number ) {
  	if ( newPagination > this.pagination_amount ) {
  		newPagination = this.pagination_amount;
  	}
  	else if ( newPagination < 0 ) {
  		newPagination = 0
  	}

  	this.current_pagination = newPagination;
  	this.page_change.emit ( newPagination );
  }
  
  ngOnInit() {
  }

}
