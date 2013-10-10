/**
 * The jQuery version of the QueryString object
 * @param  {Object} $ The jQuery object
 */
(function ($) {

    // Object variables
    var URL = window.location.href;
    var urlParams = {};

    // Checking for the query string
    if (URL.indexOf('?') > 0) {
        var URLQS = URL.substr(URL.indexOf('?') + 1);
            URLQS = URLQS.replace(/\+/g, ' ');

        if (URLQS != null || URLQS != undefined) {
            var paramArr = URLQS.split('&');

            for (var pidx = 0; pidx < paramArr.length; pidx++) {
                var paramPair = paramArr[pidx].split('=');

                if (paramPair.length == 2) {
                    var key = decodeURIComponent(paramPair[0]);
                    var val = decodeURIComponent(paramPair[1]);

                    urlParams[key] = val;
                }
            }
        }
    }
    /**
     * This function checks to see if there is a query variable in the url
     * @param {String} qskey The name of the query string parameter
     */
    $.QueryContains = function(qskey) {
        return ((urlParams[key] !== null) && (urlParams[key] !== undefined));
    };

    /**
     * Gets the value of the given query string parameter
     * @param {String} param The name the query string parameter
     */
    $.QueryValue = function(param) {
      return (((urlParams[key] !== null) && (urlParams[key] !== undefined)) ? urlParams[key] : false);
    };

})(jQuery);