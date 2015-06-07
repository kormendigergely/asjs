includeOnce( "js/normal/asjs/geom/asjs.Point.js" );
includeOnce( "js/normal/asjs/event/asjs.MouseEvent.js" );

ASJS.Mouse = function() {
	function MouseInstance() {
		var that = {};
	
		var _mouseX = 0;
		var _mouseY = 0;
	
		defineProperty( that, "mouseX", {
			get: function() { return _mouseX; }
		});
	
		defineProperty( that, "mouseY", {
			get: function() { return _mouseY; }
		});
	
		that.show = function() { stage.setCSS( "cursor", "default" ); }	
		that.hide = function() { stage.setCSS( "cursor", "none" ); }
	
		that.getRelativePosition = function( value ) {
			return value.globalToLocal( new ASJS.Point( that.mouseX, that.mouseY ) );
		};
	
		(function() {
			stage.window.on( ASJS.MouseEvent.MOUSE_MOVE, function( event ) {
				_mouseX = event.pageX;
				_mouseY = event.pageY;
			});
		})();
		
		return that;
	}
	
	defineProperty( this, "instance", {
		get: function() {
			if ( !ASJS.Mouse.$ ) ASJS.Mouse.$ = new MouseInstance();
			return ASJS.Mouse.$;
		}
	});
}
