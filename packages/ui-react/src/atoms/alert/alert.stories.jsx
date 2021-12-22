import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Alert } from './';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './alert.constants';

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const stories = storiesOf('Components/Atoms/Alert', module);
stories.addDecorator((storyFn) => <div style={{ padding: '10px' }}>{storyFn()}</div>);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);
const getText = (val = TEXT) => text('Text', val);
const getOutline = (val = false) => boolean('Outline', val);

stories.add('info', () => <Alert>{getText()}</Alert>);

stories.add('default', () => (
  <Alert kind={selectKind()} size={selectSize()} outline={getOutline()}>
    {getText()}
  </Alert>
));

stories.add('with kind modifer', () => (
  <Alert kind={selectKind(KIND_DANGER)} size={selectSize()} outline={getOutline()}>
    {getText()}
  </Alert>
));

stories.add('with size modifier', () => (
  <Alert kind={selectKind()} size={selectSize(SIZE_LARGE)} outline={getOutline()}>
    {getText()}
  </Alert>
));

stories.add('with outline modifier', () => (
  <Alert kind={selectKind()} size={selectSize()} outline={getOutline(true)}>
    {getText()}
  </Alert>
));

stories.add('render as a different element', () => (
  <Alert
    as="a"
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    outline={getOutline(true)}
  >
    {getText()}
  </Alert>
));
