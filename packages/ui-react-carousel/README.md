# ui-react-carousel

React UI Carousel component.

## Instalation

```shell
npm install @moonwalker/orbit-ui-react-carousel
```

or

```shell
yarn add @moonwalker/orbit-ui-react-carousel
```

### Peer dependencies

- `react`
- `react-dom`
- `prop-types`
- `smooth-scroll-into-view-if-needed`

### Polyfills

- [`intersection-observer`](https://www.npmjs.com/package/intersection-observer)

## Usage


```js
import { Carousel } from '@moonwalker/orbit-ui-react-carousel';

const Item = ({ text, index }) => (
  <div
    style={{
      width: '100px'
      ...(index > 0 && { marginLeft: '8px' })
    }}
  >
    {text}
  </div>
)

export const App = () => (
  <Carousel
    items={[Item1, Item2]}
  />
)
```
