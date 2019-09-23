import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

import { Progress } from './';
import { KINDS, KIND_DEFAULT, KIND_DANGER } from './progress.constants';

const stories = storiesOf('Components/Molecules/Progress', module);
stories.addDecorator((storyFn) => <div style={{ padding: '10px' }}>{storyFn()}</div>);

stories.add('info', withInfo({ inline: true })(() => <Progress value={66} />));

const selectKind = (kind = KIND_DEFAULT) => select('Kind', KINDS, kind);

stories.add('default', () => <Progress kind={selectKind()} value={66} />);

stories.add('with kind modifer', () => <Progress kind={selectKind(KIND_DANGER)} value={66} />);

stories.add('with custom total', () => <Progress kind={selectKind()} value={66} total={200} />);

stories.add('render as a different element', () => (
  <Progress as="a" onClick={action('CLICK')} kind={selectKind()} value={66} />
));

stories.add('with custom bar props', () => (
  <Progress
    kind={selectKind()}
    value={66}
    getBarProps={(props) => ({ ...props, style: { ...props.style, background: 'magenta' } })}
  />
));
