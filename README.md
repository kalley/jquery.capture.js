jquery.captures.js
=======================

Use jQuery.Deferred() to preload images.

## Usage:

```$.capture('img1.jpg')  
// return jQuery.Deferred()

$.capture(['img1.jpg', 'img2.jpg'])  
// return jQuery.when.apply(jQuery, [jQuery.Deferred() x array.length])

$.capture()  
// return jQuery.when.apply(jQuery, [jQuery.Deferred() x length of all unique images passed in])

$('img').capture()  
// return $('img'), each image now has .data('captured') which is the jQuery.Deferred()
```

## Options

`attr` = _string_ ( default is `src` )
