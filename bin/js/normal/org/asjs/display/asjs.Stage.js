includeOnce( "org/asjs/display/asjs.Sprite.js" );
includeOnce( "org/asjs/event/asjs.WindowEvent.js" );

ASJS.Stage = function() {
	function WindowInstance() {
		var that = new ASJS.DisplayObject();
		
		that.domObject = $( window );
		
		defineProperty( that, "scrollTop", {
			get: function() { return that.domObject.scrollTop(); },
			set: function( value ) { that.domObject.scrollTop( value ); }
		});
		
		defineProperty( that, "scrollLeft", {
			get: function() { return that.domObject.scrollLeft(); },
			set: function( value ) { that.domObject.scrollLeft( value ); }
		});
		
		defineProperty( that, "location", {
			get: function() { return that.domElement.location; },
			set: function( value ) { that.domElement.location = value; }
		});
		
		defineProperty( that, "navigator", {
			get: function() { return that.domElement.navigator; },
			set: function( value ) { that.domElement.navigator = value; }
		});
		
		that.setTimeout = function( callback, duration ) {
			return that.domElement.setTimeout( callback, duration );
		}
		
		that.clearTimeout = function( id ) {
			return that.domElement.clearTimeout( id );
		}
		
		that.setInterval = function( callback, duration ) {
			return that.domElement.setInterval( callback, duration );
		}
		
		that.clearInterval = function( id ) {
			return that.domElement.clearInterval( id );
		}
		
		return that;
	};
	
	function StageInstance() {
		var that = new ASJS.Sprite();
		
		var _window = new WindowInstance();
		var _head = $( "head" );
	
		that.domObject = $( "body" );
		
		var _stageWidth = 0;
		var _stageHeight = 0;
		
		defineProperty( that, "title", {
			get: function() { return document.title; },
			set: function( value ) { document.title = value; }
		});
		
		defineProperty( that, "stage", { get: function() { return that; } } );
		defineProperty( that, "stageWidth", { get: function() { return _stageWidth; } } );
		defineProperty( that, "stageHeight", { get: function() { return _stageHeight; } } );
		defineProperty( that, "window", { get: function() { return _window; } } );
		defineProperty( that, "head", { get: function() { return _head; } } );
		
		function recalcStageSize() {
			var overflowX = that.getCSS( "overflow-x" );
			var overflowY = that.getCSS( "overflow-y" );
			
			that.setCSS( "overflow-x", "hidden" );
			that.setCSS( "overflow-y", "hidden" );
			
			_stageWidth = that.window.width;
			_stageHeight = that.window.height;
			
			that.setCSS( "overflow-x", overflowX );
			that.setCSS( "overflow-y", overflowY );
			
			that.dispatchEvent( ASJS.Stage.RESIZE );
		}
		
		(function() {
			that.clear();
			that.setSize( "100%", "100%" );
			that.window.addEventListener( ASJS.WindowEvent.RESIZE, recalcStageSize );
			recalcStageSize();
		})();
		
		return that;
	};
	
	defineProperty( this, "instance", {
		get: function() {
			if ( !ASJS.Stage.$ ) ASJS.Stage.$ = new StageInstance();
			return ASJS.Stage.$;
		}
	});
};
ASJS.Stage.RESIZE				= "ASJS-Stage-resize";
ASJS.Stage.ADDED_TO_STAGE		= "ASJS-Stage-addedToStage";
ASJS.Stage.REMOVED_FROM_STAGE	= "ASJS-Stage-removedFromStage";
