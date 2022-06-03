import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';

import { Icon } from '../icon/icon';
import { Button } from './button';
import {
  KINDS,
  KIND_DEFAULT,
  KIND_DANGER,
  SIZES,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './button.constants';

import classNamesOverride from './button.stories.override-modules.css';
import classNamesImport from './button.stories.import-modules.styl';

const stories = storiesOf('Components/Atoms/Button', module);

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);
const selectSize = (size = SIZE_MEDIUM) => select('Size', SIZES, size);
const getClear = (clear = false) => boolean('Clear', clear);
const getOutline = (outline = false) => boolean('Outline', outline);
const getInline = (inline = false) => boolean('Inline', inline);

stories.add('info', () => (
  <Button
    onClick={action('Click')}
    kind="primary"
    size="small"
    clear={false}
    outline={getOutline()}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('default', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with outline modifer', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline(true)}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with outline size modifer', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize(SIZE_LARGE)}
    clear={getClear()}
    outline={getOutline(true)}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with outline kind modifer', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind(KIND_DANGER)}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline(true)}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with kind modifer', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind(KIND_DANGER)}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with kind size modifier', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize(SIZE_LARGE)}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with clear modifier', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear(true)}
    outline={getOutline()}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with inline modifier', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear(true)}
    outline={getOutline()}
    inline={getInline(true)}
  >
    Call to action
  </Button>
));

stories.add('render as a different element', () => (
  <Button
    as="a"
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    Call to action
  </Button>
));

stories.add('with left icon', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    <Icon name="backup" />
    Call to action
  </Button>
));

stories.add('with different icon size', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    <Icon name="backup" size={SIZE_LARGE} />
    Call to action
  </Button>
));

stories.add('with null children', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    {null}
    <Icon name="backup" size={SIZE_LARGE} />
  </Button>
));

stories.add('with fragment child', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    Next
  </Button>
));

stories.add('with custom content', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
  >
    <em className="custom">Call</em>
    to action
  </Button>
));

stories.add('with custom css-module class names', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
    classNames={classNamesOverride}
  >
    <Icon name="backup" />
    Call to action
  </Button>
));

stories.add('with imported css-module class names', () => (
  <Button
    onClick={action('Click')}
    kind={selectKind()}
    size={selectSize()}
    clear={getClear()}
    outline={getOutline()}
    inline={getInline()}
    classNames={classNamesImport}
  >
    <Icon name="backup" />
    Call to action
  </Button>
));
