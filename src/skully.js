/*!
 * skully.js (v1.0.0)
 * MIT LICENSE (c) 2015
 * https://github.com/codenameyau/skully.js
 */
'use strict';

var skully = skully || {};


/********************************************************************
* INTERNAL METHODS
*********************************************************************/
skully.pageHeight = function() {
  return Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight);
};

skully.isNearTop = function(offsetFromTop) {
  return (window.pageYOffset <= (offsetFromTop || 0));
};

skully.isNearBottom = function(offsetFromBottom) {
  return (window.pageYOffset + window.innerHeight >=
          skully.pageHeight() - (offsetFromBottom || 0));
};

skully.isPastPosition = function(position) {
  // 25 is an arbritary number of pixels per scroll.
  return (Math.abs(window.pageYOffset - position) < 25);
};

skully._isFunction = function(fn) {
  return (fn && fn.constructor && fn.call && fn.apply);
};


/********************************************************************
* PUBLIC METHODS
*********************************************************************/
skully.scrollEvent = function(scrollFn, args) {
  var callback = args[0];
  var slicedArgs = args[1] ? Array.prototype.slice.call(args, 1) : null;
  document.addEventListener('scroll', function() {
    if (skully._isFunction(callback) && scrollFn.apply(this, slicedArgs)) {
      return callback();
    }
  });
};

skully.onPageTop = function(callback, offset) {
  skully.scrollEvent(skully.isNearTop, arguments);
};

skully.onPageBottom = function(callback, offset) {
  skully.scrollEvent(skully.isNearBottom, arguments);
};

skully.onPagePosition = function(callback, position) {
  skully.scrollEvent(skully.isPastPosition, arguments);
};
