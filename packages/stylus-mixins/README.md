# Stylus mixins

Library of [Stylus](http://stylus-lang.com) mixins.

## Setup

### Install

```sh
npm install --save orbit-ui-stylus-mixin
```

### Use with Webpack

```js
const oribitUI = require('orbit-ui-stylus-mixin')
{
  rule: /\.styl$/,
  loader: 'stylus-loader',
  options: {
    use: orbitUI()
  }
}
```
