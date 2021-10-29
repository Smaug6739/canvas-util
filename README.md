# Canvas-util

Util class for simplify the use of canvas with nodejs.

## CanvasUtil

Import the module :

CommonJS syntax :

```javascript
const { CanvasUtil } = require("canvas-util");
```

EcmaScript syntax :

```javascript
import { CanvasUtil } from "canvas-util";
```

Create a new canvas with the width and height as a parameters (default 930x280 pixels) :

```javascript
const canvas = new CanvasUtil(1000, 800);
```

### CanvasUtil#setBackground(type, value)

Set an image or a color as the background of the canvas.

Params :

- type - The type of the background ("IMAGE" or "COLOR" : String).
- value - The value of the background (String for COLOR and Buffer or String for Image).

```js
canvas.setBackground("COLOR", "blue");
```

### CanvasUtil#setFont(name, size)

Set a font and size of text.

Params :

- name - The name of the font (string).
- size - The size of the font (number).

```js
canvas.setFont("Arial", 12);
```

### CanvasUtil#setTransparancy(transparancy)

Set a font and size of text.

Params :

- transparancy - The value of the transparancy (number).

```js
canvas.setTransparancy(0.4);
```

### CanvasUtil#addText(text, color, x, y)

Write text to canvas.

Params :

- text - The text to write (string).
- color - The color of the text (string).
- x - The x axis offset (number).
- y - The y axis offset (number).

```js
canvas.addText("Hello World", "#ffffff", 200, 200);
```

### CanvasUtil#addImage(img, x, y, px, py)

Add an image to the canvas.

Params :

- img - The image (Buffer or link).
- x - The x axis offset (number).
- y - The y axis offset (number).
- sx - The x axis size (number).
- sy - The y axis size (number).

```js
canvas.addImage("https://website.com/image.png", 200, 200, 200, 150);
```

### CanvasUtil#addCircularImage(img, x, y, px, py)

Add an circular image to the canvas.
_Note : For a good result, sx and sy should be same value_

Params :

- img - The image (Buffer or link).
- x - The x axis offset (number).
- y - The y axis offset (number).
- sx - The x axis size (number).
- sy - The y axis size (number).

```js
canvas.addImage("https://website.com/image.png", 200, 200, 150, 150);
```

### CanvasUtil#build()

Build the canvas and return a buffer of the image.

```js
canvas.build();
```
