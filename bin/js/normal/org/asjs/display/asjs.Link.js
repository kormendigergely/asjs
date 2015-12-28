includeOnce( "org/asjs/display/asjs.Sprite.js" );

ASJS.Link = function() {
	var that = new ASJS.Sprite( "<a />" );
	
	defineProperty( that, "href", {
		get: function() { return that.getAttr( "href" ); },
		set: function( value ) { that.setAttr( "href", value ); }
	});
	
	defineProperty( that, "target", {
		get: function() { return that.getAttr( "target" ); },
		set: function( value ) { that.setAttr( "target", value ); }
	});
	
	return that;
}

