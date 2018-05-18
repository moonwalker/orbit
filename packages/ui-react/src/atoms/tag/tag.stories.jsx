import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Tag } from './tag';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE,
} from './tag.constants';

const stories = storiesOf('Components/Atoms/Tag', module);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);

stories.add('info', withInfo({ inline: true })(() => (
  <Tag
    kind="primary"
    size="small"
  >
    Tag A
  </Tag>
)));

stories.add('default', () => (
  <Tag
    kind={selectKind()}
    size={selectSize()}
  >
    Tag A
  </Tag>
));

stories.add('with kind modifer', () => (
  <Tag
    kind={selectKind(KIND_DANGER)}
    size={selectSize()}
  >
    Tag A
  </Tag>
));

stories.add('with size modifier', () => (
  <Tag
    kind={selectKind()}
    size={selectSize(SIZE_LARGE)}
  >
    Tag A
  </Tag>
));

stories.add('render as a different element', () => (
  <Tag
    as="a"
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
  >
    Tag A
  </Tag>
));
