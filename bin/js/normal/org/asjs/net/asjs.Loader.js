includeOnce( "org/asjs/event/asjs.EventDispatcher.js" );
includeOnce( "org/asjs/event/asjs.LoaderEvent.js" );

ASJS.Loader = function() {
	var that = new ASJS.EventDispatcher();
	
	var _url;
	var _data;
	var _requestType;
	var _dataType;
	var _headers;
	var _content;
	
	defineProperty( that, "url", { get: function() { return _url; } } );
	defineProperty( that, "content", { get: function() { return _content; } } );
	
	defineProperty( that, "headers", {
		get: function() { return _headers; },
		set: function( value ) { _headers = value; }
	});
	
	defineProperty( that, "data", {
		get: function() { return _data; },
		set: function( value ) { _data = value; }
	});

	defineProperty( that, "requestType", {
		get: function() { return _requestType; },
		set: function( value ) { _requestType = value; }
	});
	
	defineProperty( that, "dataType", {
		get: function() { return _dataType; },
		set: function( value ) { _dataType = value; }
	});
	
	that.load = function( url ) {
		if ( !url ) return;
		_url = url;
		
		var requestData = {
			type: _requestType,
			url: _url,
			cache: false,
			contentType: false,
			crossDomain: true,
			processData: false,
			xhrFields: {
				withCredentials: true,
				onprogress: onProgress
			},
			progress: function( event ) {
				if ( event.lengthComputable ) onProgress( event );
		    },
			success: onSuccessEvent,
			error: onErrorEvent,
			complete: onCompleteEvent
		};
	
		if ( _dataType )	requestData.dataType = _dataType;
		if ( _data )		requestData.data = _data;
		if ( _headers )		requestData.headers = _headers;
	
		$.ajax( requestData );
		
		onLoadStart();
	}
	
	function onSuccessEvent( data ) {
		_content = data;
		onLoad();
	}
	
	function onErrorEvent( xhr, textStatus, errorThrown ) {
		_content = xhr;
		onError( xhr );
	}
	
	function onCompleteEvent() {
		onLoadEnd();
	}
	
	function onLoadStart() {
		dispatch( ASJS.LoaderEvent.LOAD_START );
	}
	
	function onProgress( data ) {
		dispatch( ASJS.LoaderEvent.PROGRESS, data );
	}
	
	function onLoad() {
		dispatch( ASJS.LoaderEvent.LOAD );
	}
	
	function onLoadEnd() {
		dispatch( ASJS.LoaderEvent.LOAD_END );
	}
	
	function onError( data ) {
		dispatch( ASJS.LoaderEvent.ERROR, data );
	}
	
	function dispatch( type, data ) {
		var e = new ASJS.LoaderEvent( type );
			e.value = data;
		that.dispatchEvent( e );
	}
	
	return that;
};
