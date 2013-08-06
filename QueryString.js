var QueryString = (function(win) {
	
	// Object variables
	var urlParams = {};
	var URLQueryString = null;

	// Private functions
	var setQueryString = function(URL) {
		if (URL.indexOf('?') > 0) {
			URLQueryString = URL.substr(URL.indexOf('?') + 1);
			URLQueryString = URLQueryString.replace(/\+/g, ' ');
		}
	};

	var setURLParameters = function(qs) {
		if (qs != null || qs != undefined) {
			var paramArr = qs.split('&');

			for (var pidx = 0; pidx < paramArr.length; pidx++) {
				var paramPair = paramArr[pidx].split('=');
				
				if (paramPair.length == 2) {
					var key = decodeURIComponent(paramPair[0]);
					var val = decodeURIComponent(paramPair[1]);
					
					urlParams[key] = val;
				}
			}
		}
	};

	setQueryString(window.location.href);
	setURLParameters(URLQueryString);

	// Return the Object with the public functions and variables
	return {
		getURLParamValue: function(key) {

			if (this.contains(key)) {
				return urlParams[key];
			}

			return false;
		},
		contains: function(key) {
			return ((urlParams[key] !== null) && (urlParams[key] !== undefined));
		}
	};
}(window));