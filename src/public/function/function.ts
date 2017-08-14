export function getOffsetTop( elements ){
	var top = elements.offsetTop;
	var parent = elements.offsetParent;

	while( parent != null ){
		top += parent.offsetTop;
		parent = parent.offsetParent;
	};

	return top;
};

export function  getScrollTop () {
	var scrollTop = document.body.scrollTop==0?document.documentElement.scrollTop:document.body.scrollTop;

	return scrollTop; 
}

export function getScrollLeft () {
	var scrollLeft = document.body.scrollLeft==0?document.documentElement.scrollLeft:document.body.scrollLeft;

	return scrollLeft;
}

export function getOffsetLeft( elements ){
	var left = elements.offsetLeft;
	var parent = elements.offsetParent;

	while( parent != null ){
		left += parent.offsetLeft;
		parent = parent.offsetParent;
	};

	return left;
};



export function strToSecond ( str ) {
	var str_arr = str.split ( ":" );

	var Second = parseFloat ( str_arr[ str_arr.length - 1 ] );

	if ( str_arr.length > 1 ) {
		Second += parseFloat ( str_arr[ str_arr.length - 2 ] ) * 60;	

		if ( str_arr.length > 2 ) {
			Second += parseFloat ( str_arr[ str_arr.length - 3 ] ) * 3600;
		}
	}

	return Second;
}

export function anim ( fps: any, option: any ) {
	for ( var i = 0, len = fps.length; i < len; i++ ) {

	}
}

export function launchFullscreen(element) {
//此方法不可以在異步任務中執行，否則火狐無法全屏
	if ( element.requestFullscreen ) {
		element.requestFullscreen ();
	} 
	else if ( element.mozRequestFullScreen ) {
		element.mozRequestFullScreen ();
	} 
	else if ( element.msRequestFullscreen ) {  
		element.msRequestFullscreen();  
	} 
	else if ( element.oRequestFullscreen ) {
		element.oRequestFullscreen();
	}
	else if ( element.webkitRequestFullscreen ) {
		element.webkitRequestFullScreen();
	}
	else {
		var docHtml  = document.documentElement;
		var docBody  = document.body;
		var cssText = 'width:100%;height:100%;overflow:hidden;';
		docHtml.style.cssText = cssText;
		docBody.style.cssText = cssText;
		element.style.cssText = cssText+';'+'margin:0px;padding:0px;';
		document['IsFullScreen'] = true; 
	}
}

export function exitFullscreen ( element ){
	if ( document['exitFullscreen'] ) {
		document['exitFullscreen'] ();
	} 
	else if ( document['msExitFullscreen'] ) {
		document[ 'msExitFullscreen' ] ();
	} 
	else if ( document[ 'mozCancelFullScreen' ] ) {
		document[ 'mozCancelFullScreen' ] ();
	} 
	else if ( document[ 'oRequestFullscreen' ] ) {
		document['oCancelFullScreen'];
	}
	else if ( document[ 'webkitExitFullscreen' ] ) {
		document['webkitExitFullscreen'];
	}
	else {
		if ( !element ) {
			return false;
		}
		var docHtml  = document.documentElement;
		var docBody  = document.body;
		var videobox  = document.getElementById('videobox');
		docHtml.style.cssText = "";
		docBody.style.cssText = "";
		element.style.cssText = "";
		document['IsFullScreen'] = false;
	}
}

export function isFullscreen () {
	if (
		document[ 'fullscreenElement' ] || 
		document[ 'webkitFullscreenElement' ] || 
		document[ 'mozFullScreenElement' ] || 
		document[ 'msFullscreenElement' ] ||
		document[ 'IsFullScreen' ]
	) {
		return true;
	}
	else {
		return false;
	}
}

export function setFullscreenChangeListener ( fun: any ) {
	if ( document[ 'onfullscreenchange' ] !== undefined ) {
		document[ 'onfullscreenchange' ] = fun;
		console.log ( 'a' );
	}
	else if ( document[ 'onwebkitfullscreenchange' ] !== undefined ) {
		document[ 'onwebkitfullscreenchange' ] = fun;
		console.log ( 'b' );
	}
	else if ( document[ 'onmozfullscreenchange' ] !== undefined ) {
		document[ 'onmozfullscreenchange' ] = fun;
		console.log ( 'c' );
	}
	else if ( document[ 'MSFullscreenChange' ] !== undefined ) {
		document[ 'MSFullscreenChange' ] = fun;
		console.log ( 'd' );
	}
}

export function timestampParse ( timestamp ) {
	let partern = /^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2} [0-9]{1,2}\:[0-9]{1,2}\:[0-9]{1,2}$/;

    if ( !partern.test ( timestamp ) ) {
      return false
    }

	var timestamp = timestamp.split ( " " );

	var date = timestamp[ 0 ].split ( "-" );
	var time = timestamp[ 1 ].split ( ':' );

	var arr = [];

	for ( var i = 0, len = date.length; i < len; i++ ) {
		arr.push ( parseFloat ( date[ i ] ) );
	}

	for ( var i = 0, len = time.length; i < len; i++ ) {
		arr.push ( parseFloat ( time[ i ] ) );
	}

	return arr;
}
/*export function myAnimation ( source: any, target: any, fps: number, duration: number ) {
	for ( var i in source ) {
		if ( !target[ i ] ) {
			alert ( "target error" );
			return; 
		}
		else if ( target[ i ] === source[ i ] ) {
			continue;
		}
		else {
			let time_per_fps = 1000 / fps;
			let distance_per_fps = Math.abs ( target[ i ] - source[ i ] ) / ( duration / time_per_fps );

			if ( target[ i ] > source[ i ]  ) {
				var interval = setInterval ( ()=>{
				   source[ i ] += distance_per_fps;

				   if ( source[ i ] >= target[ i ] ) {
				     source[ i ] = target[ i ];
				     clearInterval ( interval ); 
				   }
				}, time_per_fps );
			}
			else {
				var interval = setInterval ( ()=>{
				   source[ i ] -= distance_per_fps;

				   if ( source[ i ] <= target[ i ] ) {
				     state_save.state = position;
				     clearInterval ( state_save.interval ); 
				   }
				}, time_per_fps )
			}
		}
	}
}*/