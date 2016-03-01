requirejs({
	baseUrl:'js/lib',
	paths:{
		app:'../app',
		jquery:'jquery/1.11.3/jquery.min'
	}	
})	

requirejs(['jquery','canvas','app/sub'],function ($,canvas,sub) {
	//jquery ,canvas,app/sub module 都加载了，and can be used here now.
	//...code
	//alert($('body').length);
})
