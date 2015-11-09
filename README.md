# skully.js

Native JS scroll event handlers.

### Examples

```javascript
'use strict';

// Listens when scrolling to the top of the page.
skully.onPageTop(function() {
  alert('top');
});

// Listens when scrolling past a position, 400 in this case.
skully.onPagePosition(function() {
  alert('middle');
}, 400);

// Listens when scrolling to the bottom of the page.
skully.onPageBottom(function() {
  alert('bottom');
});
```

### Generate Build

```bash
# sudo npm install -g uglify-js
uglifyjs --compress --mangle -o build/skully.min.js -- src/skully.js
```
