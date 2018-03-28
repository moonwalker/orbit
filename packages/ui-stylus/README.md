# orbit-ui-stylus

Generic UI components library.

## Setup

### Install

```sh
npm install --save orbit-ui-stylus
```

### Use with Webpack

```js
const oribitUI = require('@moonwalker/orbit-ui-stylus')
{
  rule: /\.styl$/,
  loader: 'stylus-loader',
  options: {
    use: orbitUI()
  }
}
```
