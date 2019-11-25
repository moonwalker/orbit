import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, Redirect, Route, Switch } from 'react-router-dom';

// import { ScrollToTop } from '../scroll-to-top';
// TODO
const ScrollToTop = () => null;

const getInitialEntryPath = (steps, initialStep, initialPath) => {
  if (initialPath) {
    const foundStep = steps.find((step) => step.path === initialPath);

    if (foundStep) {
      return foundStep.path;
    }
  }

  return steps[initialStep].path;
};

export const Wizard = (props) => {
  const {
    history: appRouterHistory,
    steps,
    initialStep,
    initialPath,

    onEnd,
    onCancel,

    data,
    setData,

    stepWrapperComponent: Wrapper,

    ...restWizardProps
  } = props;

  const initialEntryPath = getInitialEntryPath(steps, initialStep, initialPath);

  const resolveNextStepPath = (step, stepIndex, values) => {
    if (typeof step.nextPath !== 'undefined') {
      return typeof step.nextPath === 'function' ? step.nextPath(values) : step.nextPath;
    }

    if (stepIndex < steps.length - 1) {
      return steps[stepIndex + 1].path;
    }

    return '';
  };

  return (
    <MemoryRouter initialEntries={[initialEntryPath]}>
      <Switch>
        {steps.map(({ component: Component, ...step }, stepIndex) => (
          <Route
            key={step.path}
            path={step.path}
            exact
            render={({ history, location, match }) => {
              const stepProps = {
                // navigation
                handleWizardNextStep: (values, historyMethodType = 'push') => {
                  const nextPath = resolveNextStepPath(step, stepIndex, values);

                  if (nextPath) {
                    if (nextPath.pathname !== location.pathname) {
                      history[historyMethodType](nextPath);
                    } else {
                      history.replace(nextPath);
                    }
                  } else {
                    onEnd();
                  }
                },
                handleWizardPrevStep: (history.canGo(-1) && history.goBack) || null,
                handleWizardGo: history.push,
                handleWizardCancel: onCancel ? () => onCancel(data) : null,
                handleWizardGoBackTo: (pathname) => {
                  const index = history.entries.findIndex(
                    (entries) => entries.pathname === pathname
                  );

                  if (index > -1) {
                    history.go(index - history.index);
                  } else {
                    history.push(pathname);
                  }
                },
                handleWizardGoBackFirst: () => history.go(-history.entries.length),

                renderWizardRedirect: (redirectLocation) => {
                  const nextLocation =
                    redirectLocation || resolveNextStepPath(step, stepIndex, data);

                  return <Redirect to={nextLocation} />;
                },

                // data handling
                handleWizardSetData: setData,
                wizardData: data,

                // current step props
                ...step.props,

                // wizard props
                ...restWizardProps,

                // routing props
                history,
                location,
                match
              };

              return (
                <Wrapper {...stepProps}>
                  <Component {...stepProps} />
                </Wrapper>
              );
            }}
          />
        ))}
        {/* Pass other urls to the application router */}
        <Route
          render={({ location }) => {
            if (location.pathname !== appRouterHistory.location.pathname) {
              appRouterHistory.push(location);
            }

            return null;
          }}
        />
      </Switch>
    </MemoryRouter>
  );
};

Wizard.defaultProps = {
  initialStep: 0,
  initialPath: '',
  onEnd: () => {},
  onCancel: () => {},
  stepWrapperComponent: ({ children }) => children
};

Wizard.propTypes = {
  /** Application router history */
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types

  /** Steps aray */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      component: PropTypes.function
    })
  ).isRequired,

  /** Initial step */
  initialStep: PropTypes.number,

  /** Initial path */
  initialPath: PropTypes.string,

  /** End event */
  onEnd: PropTypes.func,

  /** Cancel event */
  onCancel: PropTypes.func,

  /** stepWrapperComponent */
  stepWrapperComponent: PropTypes.func
};
