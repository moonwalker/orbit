# orbit-mixins-stylus

[Stylus](http://stylus-lang.com) mixins and utilities library.

## Setup

### Install

```sh
npm install --save orbit-ui-stylus-mixin
```

### Use with Webpack

```js
const oribit = require('@moonwalker/orbit-mixins-stylus')
{
  rule: /\.styl$/,
  loader: 'stylus-loader',
  options: {
    use: orbit()
  }
}
```
