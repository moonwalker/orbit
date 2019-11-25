import { withRouter } from 'react-router-dom';

import { wizardContainer } from './wizard.container';
import { Wizard as WizardComponent } from './wizard';

export const Wizard = withRouter(wizardContainer(WizardComponent));
