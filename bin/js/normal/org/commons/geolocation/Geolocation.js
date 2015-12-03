includeOnce( "org/asjs/mvc/ASJS.NotificationDispatcher.js" );

GeolocationData = function() {
	var that = {};
	that.latitude =			0;
	that.longitude =		0;
	that.altitude =			0;
	that.accuracy =			0;
	that.altitudeAccuracy =	0;
	that.heading =			0;
	that.speed =			0;
	return that;
}

Geolocation = function() {
	var that = new ASJS.NotificationDispatcher();
	
	var _geolocation;
	var _watchID;
	var _location = new GeolocationData();
	
	that.init = function( enableHighAccuracy, timeout, maximumAge ) {
		if ( _geolocation && _watchID ) _geolocation.clearWatch( _watchID );
	
		_geolocation = getGeolocation();
		if ( _geolocation ) {
			var obj = {
				'enableHighAccuracy': enableHighAccuracy || false,
				'timeout': timeout || 10000,
				'maximumAge': maximumAge || 60000
			}
			_watchID = _geolocation.watchPosition( setGeoDatas, errorGettingPosition, obj );
		} else throw new Error( "Geolocation: Not Supported" );
	}
	
	that.isSupported = function() {
		return getGeolocation() != null;
	}
	
	function getGeolocation() {
		var geolocation = stage.window.navigator.geolocation;
		if ( !geolocation ) geolocation = navigator.geolocation;
		if ( !geolocation ) return null;
		return geolocation;
	}
	
	function setGeoDatas( position ) {
		_location.latitude			= position.coords.latitude || 0;
		_location.longitude			= position.coords.longitude || 0;
		_location.altitude			= position.coords.altitude || 0;
		_location.accuracy			= position.coords.accuracy || 0;
		_location.altitudeAccuracy	= position.coords.altitudeAccuracy || 0;
		_location.heading			= position.coords.heading || 0;
		_location.speed				= position.coords.speed || 0;
		
		that.sendNotification( Geolocation.UPDATE, _location );
	}

	function errorGettingPosition( error ) {
		that.sendNotification( Geolocation.ERROR, error );
	}
	
	return that;
};
Geolocation.UPDATE	= "Geolocation-update";
Geolocation.ERROR	= "Geolocation-error";
