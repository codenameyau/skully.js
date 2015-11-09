# skully.js

Native JS scroll event handlers.

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

### Generate Build

```bash
# sudo npm install -g uglify-js
uglifyjs --compress --mangle -o build/skully.min.js -- src/skully.js
```
