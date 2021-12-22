import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';

import { Badge } from './';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './badge.constants';

const stories = storiesOf('Components/Atoms/Badge', module);
stories.addDecorator((storyFn) => <div style={{ padding: '10px' }}>{storyFn()}</div>);

stories.add('info', () => <Badge>0</Badge>);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);
const getText = (val = 5) => text('Text', val);

stories.add('default', () => (
  <Badge kind={selectKind()} size={selectSize()}>
    {getText()}
  </Badge>
));

stories.add('with long text', () => (
  <Badge kind={selectKind()} size={selectSize()}>
    {getText(1000)}
  </Badge>
));

stories.add('with kind modifer', () => (
  <Badge kind={selectKind(KIND_DANGER)} size={selectSize()}>
    {getText()}
  </Badge>
));

stories.add('with size modifier', () => (
  <Badge kind={selectKind()} size={selectSize(SIZE_LARGE)}>
    {getText()}
  </Badge>
));

stories.add('render as a different element', () => (
  <Badge as="a" onClick={action('Click')} kind={selectKind()} size={selectSize()}>
    {getText()}
  </Badge>
));
