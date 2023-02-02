import React from 'react';
import { Stack } from './stack';
import { UI_NAME_VSTACK } from './stack.constants';

export const VStack = (props) => <Stack {...props} direction="column" />;

VStack.displayName = UI_NAME_VSTACK;

export default VStack;
