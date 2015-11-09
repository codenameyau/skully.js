# skully.js

Scroll event handlers in native js.

### Examples

```javascript
'use strict';

skully.onPageBottom(function() {
  alert('bottom');
});

skully.onPageTop(function() {
  alert('top');
});

skully.onPagePosition(function() {
  alert('middle');
}, 400);
```
