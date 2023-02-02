import React from 'react';
import { Stack } from './stack';
import { UI_NAME_HSTACK } from './stack.constants';

export const HStack = (props) => <Stack {...props} direction="row" />;

HStack.displayName = UI_NAME_HSTACK;
