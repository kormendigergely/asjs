includeOnce( "org/asjs/display/form/asjs.FormElement.js" );
includeOnce( "org/asjs/display/asjs.DisplayObject.js" );
includeOnce( "org/asjs/event/asjs.MouseEvent.js" );
includeOnce( "org/asjs/event/asjs.Event.js" );

ASJS.FileSelector = function() {
	var that = new ASJS.FormElement();
	var _super = {};
	
	that._fileInput = new ASJS.DisplayObject( "<input />" );
	
	var _preview = new ASJS.Sprite();
	
	defineProperty( that, "preview", { get: function() { return _preview; } } );
	
	defineProperty( that, "val", { get: function() { return that._fileInput.domObject.val(); } } );
	
	defineProperty( that, "name", {
		get: function() { return that._fileInput.getAttr( "name" ); },
		set: function( value ) { that._fileInput.setAttr( "name", value ); }
	});
	
	extendProperty( _super, that, "enabled" );
	defineProperty( that, "enabled", {
		set: function( value ) {
			_super.enabled = value;
			that._fileInput.enabled = that.enabled;
			that.drawNow();
		}
	})
	
	defineProperty( that, "fileInput", { get: function() { return _fileInput; } } );
	
	that._onChange = function( event ) {
		_preview.text = that.val;
		that.dispatchEvent( ASJS.FileSelector.ON_CHANGE );
	}
	
	function onClick( event ) {
		if ( event.target == that._fileInput.domElement ) return;
		that._fileInput.domObject.click();
	}
	
	function init() {
		that._fileInput.setAttr( "type", "file" );
		that._fileInput.addEventListener( ASJS.Event.CHANGE, that._onChange );
		that._fileInput.visible = false;
		that.addChild( that._fileInput );
		
		_preview.setSize( "100%", "100%" );
		_preview.move( 0, 0 );
		that.addChild( _preview );
		
		that.addEventListener( ASJS.MouseEvent.CLICK, onClick );
	}
	
	(function() {
		init();
	})();
	
	return that;
}
ASJS.FileSelector.ON_CHANGE		= "ASJS-FileSelector-onChange";
