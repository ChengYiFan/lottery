



lottery.localStorage = (function(){
	var get, set;

	get = function( key ){
		return window.localStorage.getItem( key ) || '';
	};
	set = function( key, val ){
		window.localStorage.setItem( key, val );
	};
	//读取本地中奖数据
	reading = function(){

	};
	clear = function(){
		window.localStorage.clear();
	};
	init = function(){
		if(!window.localStorage){
			alert('This browser does NOT support localStorage.');
		}
	};
	return {
		init: init,
    	get : get,
    	set : set,
    	clear:clear
  	};

}());