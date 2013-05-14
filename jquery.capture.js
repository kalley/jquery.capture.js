/*
 * jquery.capture.js
 *
 *
 */
(function($) {
  'use strict';
  var album = {};

  // always returns $.Deferred()
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
        preloader.onload = function() { deferred.resolve(this); };
        preloader.onerror = function() { deferred.reject(this); };
        preloader.src = src;

        album[src] = deferred;
      }

      return album[src];
    } else {
      return $.when.apply($, $.map(album, function(val) { return val; }));
    }
  };

  $.fn.capture = function(options) {

    var opts = $.extend({}, $.capture.defaults, options);

    return this.each(function() {
      var attr = $(this).attr(opts.attr);
      if ( attr ) {
        $.data(this, 'captured', $.capture(attr));
      }
    });

  };

  $.capture.defaults = {
    attr: 'src'
  };

})(jQuery);