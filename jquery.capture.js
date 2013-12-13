/*
 * jquery.capture.js
 *
 *
 */
(function($) {
  'use strict';
  var album = {};

  // always returns $.Deferred().promise()
  $.capture = function(src) {

    if ( src !== void 0 ) {
      if ( $.isArray(src) ) {
        return $.when.apply($, $.map(src, function(val) {
          return $.capture(val);
        }));
      }
      if ( album[src] === void 0 ) {
        var deferred = $.Deferred();

        var preloader = new Image();
        preloader.onload = function() { deferred.resolve(preloader); };
        preloader.onerror = function() { deferred.reject(preloader); };
        preloader.src = src;

        album[src] = deferred;
      }

      return album[src].promise();
    } else {
      return $.when.apply($, $.map(album, function(val) { return val; }));
    }
  };

  $.fn.capture = function(options) {

    var opts = $.extend({}, defaults, options);

    return this.each(function() {
      var attr = $(this).attr(opts.attr),
          captured;
      if ( attr ) {
        captured = $.capture(attr);
        $.data(this, 'captured', captured);
      }
    });

  };

  var defaults = $.capture.defaults = {
    attr: 'src'
  };

})(jQuery);
