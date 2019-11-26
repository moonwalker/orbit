import React from 'react';
import PropTypes from 'prop-types';
import { Link, MemoryRouter } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button } from '../../atoms/button';
import { Wizard } from '.';

const Wrapper = ({ title, onBack, onClose, wizardData, ...restProps }) => (
  <div>
    <div
      style={{
        padding: '12px',
        background: '#eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <button type="button" onClick={onBack}>
        back
      </button>
      <span>{title}</span>
      <button type="button" onClick={onClose}>
        close
      </button>
    </div>
    <div style={{ padding: '24px' }} {...restProps} />
    <h4>Wizard data:</h4>
    <pre style={{ background: 'lightyellow', padding: '12px' }}>
      {JSON.stringify(wizardData, null, 2)}
    </pre>
  </div>
);

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  wizardData: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Content = ({ style = {}, ...props }) => (
  <div
    style={{
      background: '#fefefe',
      padding: '24px',
      ...style
    }}
    {...props}
  />
);

const getComponent = (id, ChildComponent = () => null) => ({
  handleWizardNextStep,
  handleWizardPrevStep,
  handleWizardCancel,
  wizardData,
  handleWizardSetData
}) => (
  <div>
    <h1>{`Component ${id}`}</h1>
    <button type="button" onClick={handleWizardPrevStep} style={{ margin: '4px' }}>
      Previous
    </button>
    <button type="button" onClick={handleWizardNextStep} style={{ margin: '4px' }}>
      Next
    </button>
    <button type="button" onClick={handleWizardCancel} style={{ margin: '4px 4px 4px 16px' }}>
      Cancel
    </button>
  </div>
);

const stories = storiesOf('Components/Organisms/Wizard', module);

stories.addDecorator((storyFn) => (
  <MemoryRouter State={{}}>
    <div style={{ width: '100%', maxWidth: '380px', padding: '24px' }}>{storyFn()}</div>
  </MemoryRouter>
));

const getComponentWithReducer = (id, ChildComponent = () => null) => ({
  handleWizardNextStep,
  handleWizardPrevStep,
  handleWizardCancel,
  wizardData,
  handleWizardSetData
}) => (
  <Wrapper
    title={`Step ${id}`}
    handleBackButtonClick={handleWizardPrevStep}
    handleCloseButtonClick={handleWizardCancel}
  >
    <ChildComponent />

    <Button
      onClick={() => {
        // Due to the async nature of setState, we need to run handleWizardNextStep after the state
        // has been updated
        handleWizardSetData({
          type: 'ADD_STEP_DATA',
          payload: {
            [`step${id}`]: `step-${id}`
          }
        });
        handleWizardSetData(
          {
            type: 'UPDATE_STEP',
            payload: `updated-step-${id}`
          },
          handleWizardNextStep
        );
      }}
      size="small"
      kind="primary"
    >
      Go next
    </Button>

    <pre>{JSON.stringify(wizardData, null, 2)}</pre>
  </Wrapper>
);

const getWrappedComponent = (id, ChildComponent = () => null) => ({
  handleWizardNextStep,
  handleWizardSetData
}) => (
  <>
    <ChildComponent />
    <Button
      onClick={() => {
        handleWizardSetData({ [`step-${id}`]: id }, handleWizardNextStep);
      }}
      size="small"
      kind="primary"
    >
      Go next
    </Button>
  </>
);

stories.add('default', () => (
  <Wizard
    steps={[
      {
        path: '/step-1',
        component: getComponent(1)
      },
      {
        path: '/step-2',
        component: getComponent(2)
      },
      {
        path: '/step-3',
        component: getComponent(3)
      }
    ]}
    onEnd={action('END')}
    onCancel={action('CANCEL')}
  />
));

// stories.add('with nextPath', () => (
//   <Wizard
//     steps={[
//       {
//         path: '/step-1',
//         component: getComponent(1),
//         nextPath: () => '/step-3'
//       },
//       {
//         path: '/step-2',
//         component: getComponent(2)
//       },
//       {
//         path: '/step-3',
//         component: getComponent(3)
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//   />
// ));
//
// stories.add('with redirect', () => (
//   <Wizard
//     steps={[
//       {
//         path: '/step-1',
//         component: getComponent(1)
//       },
//       {
//         path: '/step-2',
//         component: ({ renderWizardRedirect }) => renderWizardRedirect()
//       },
//       {
//         path: '/step-3',
//         component: getComponent(3)
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//   />
// ));
//
// stories.add('with custom redirect (explicit)', () => (
//   <Wizard
//     steps={[
//       {
//         path: '/step-1',
//         component: getComponent(1)
//       },
//       {
//         path: '/step-2',
//         component: ({ renderWizardRedirect }) => renderWizardRedirect('/step-4')
//       },
//       {
//         path: '/step-3',
//         component: getComponent(3)
//       },
//       {
//         path: '/step-4',
//         component: getComponent(4)
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//   />
// ));
//
// stories.add('with custom redirect (nextPath)', () => (
//   <Wizard
//     steps={[
//       {
//         path: '/step-1',
//         component: getComponent(1)
//       },
//       {
//         path: '/step-2',
//         component: ({ renderWizardRedirect }) => renderWizardRedirect(),
//         nextPath: '/step-4'
//       },
//       {
//         path: '/step-3',
//         component: getComponent(3)
//       },
//       {
//         path: '/step-4',
//         component: getComponent(4)
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//   />
// ));
//
// stories.add('with custom path', () => (
//   <Wizard
//     initialData={{
//       'step-1': 'initial step-1'
//     }}
//     steps={[
//       {
//         path: '/step-1',
//         component: getComponent(1)
//       },
//       {
//         path: '/step-2',
//         component: getComponent(2, () => (
//           <p>
//             <Link to="/step-2-1">Step 2-1</Link>
//             &nbsp;or&nbsp;
//             <Link to="/step-2-2">Step 2-2</Link>
//           </p>
//         ))
//       },
//       {
//         path: '/step-2-1',
//         component: getComponent('2-1'),
//         nextPath: '/step-3'
//       },
//       {
//         path: '/step-2-2',
//         component: getComponent('2-1'),
//         nextPath: '/step-3'
//       },
//       {
//         path: '/step-3',
//         component: getComponent(3)
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//   />
// ));
//
// stories.add('with reducer', () => (
//   <Wizard
//     initialData={{
//       lastStep: '',
//       steps: {}
//     }}
//     reducer={(state, { type, payload }) => {
//       switch (type) {
//         case 'UPDATE_STEP': {
//           return {
//             ...state,
//             lastStep: payload
//           };
//         }
//         case 'ADD_STEP_DATA':
//           return {
//             ...state,
//             steps: {
//               ...state.steps,
//               ...payload
//             }
//           };
//         default:
//           return state;
//       }
//     }}
//     steps={[
//       {
//         path: '/step-1',
//         component: getComponentWithReducer(1)
//       },
//       {
//         path: '/step-2',
//         component: getComponentWithReducer(2)
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//   />
// ));
//
// stories.add('with wrapper', () => (
//   <Wizard
//     steps={[
//       {
//         path: '/step-1',
//         component: getWrappedComponent(1),
//         title: 'Step 1'
//       },
//       {
//         path: '/step-2',
//         component: getWrappedComponent(2),
//         title: 'Step 2'
//       },
//       {
//         path: '/step-3',
//         component: getWrappedComponent(3),
//         title: 'Step 3'
//       }
//     ]}
//     onEnd={action('end')}
//     onCancel={action('cancel')}
//     stepWrapperComponent={({
//       handleWizardPrevStep,
//       handleWizardCancel,
//       wizardData,
//       children,
//       ...props
//     }) => (
//       <Dialog
//         title={props.title}
//         handleBackButtonClick={handleWizardPrevStep}
//         handleCloseButtonClick={handleWizardCancel}
//       >
//         {children}
//         <pre>{JSON.stringify(wizardData, null, 2)}</pre>
//       </Dialog>
//     )}
//   />
// ));
