includeOnce( "js/normal/controller/command/AbstractCommand.js" );
includeOnce( "js/normal/mediator/PreloaderMediator.js" );
includeOnce( "js/normal/mediator/ContentMediator.js" );
includeOnce( "js/normal/model/Language.js" );
includeOnce( "js/normal/model/Cookies.js" );
includeOnce( "js/normal/asjs/utils/asjs.Cycler.js" );

function StartupCommand() {
	var that = new AbstractCommand();
	
	var _language = new Language().instance;
	var _cookies = new Cookies().instance;
	var _cycler = new ASJS.Cycler().instance;
	
	var _sleepToResizeId;
	
	that.execute = function() {
		that.sendNotification( PreloaderMediator.SHOW );
		
		_cookies.createCookie( 'language', _language.selectedLanguage );
		stage.title = _language.getText( "title" );
		
		var cycler = new ASJS.Cycler().instance;
			cycler.fps = 24;
			cycler.start();
			
		that.sendNotification( ContentMediator.SHOW );
		
		stage.addEventListener( ASJS.Stage.RESIZE, function( event ) {
			window.clearTimeout( _sleepToResizeId );
			_sleepToResizeId = window.setTimeout( function() {
				that.sendNotification( ASJS.Stage.RESIZE );
				window.clearTimeout( _sleepToResizeId );
			}, 100 );
		});
		that.sendNotification( PreloaderMediator.HIDE );
	}
	
	return that;
}
