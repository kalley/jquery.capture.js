jquery.capture.js
=======================

Use jQuery.Deferred() to preload images.

## Usage:

```
$.capture('img1.jpg')  
// return jQuery.Deferred().promise()

$.capture(['img1.jpg', 'img2.jpg'])  
// return jQuery.when.apply(jQuery, [jQuery.Deferred() x array.length])

$.capture()  
// return jQuery.when.apply(jQuery, [jQuery.Deferred() x length of all unique images passed in])

$('img').capture()  
// return $('img'), each image now has .data('captured') which is the jQuery.Deferred()
```

You can also add a `then` option when calling it on an `<img>` tag:

```
$('img').capture({
  // img = new Image()
  // promise is the promise
  // this refers to the <img> tag
  then: function(img, promise) {
    // do something awesome.
  }
});
```

## Options

`attr` = _string_ ( default is `src` )  
`then` = _function_ ( default is `null`)
