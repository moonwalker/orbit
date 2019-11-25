import React from 'react';
import PropTypes from 'prop-types';

export const wizardContainer = (BaseComponent) => {
  class WizardContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: props.initialData
      };
    }

    setData = (newData, callback) => {
      const { reducer } = this.props;
      const action = newData.payload ? newData : { payload: newData };

      this.setState(
        (prevState) => ({
          data: reducer(prevState.data, action)
        }),
        () => {
          if (callback) {
            callback(action.payload);
          }
        }
      );
    };

    handleOnEnd = () => {
      this.props.onEnd(this.state.data);
    };

    render() {
      const { initialData, reducer, onEnd, ...restProps } = this.props;

      return (
        <BaseComponent
          {...restProps}
          {...this.state}
          onEnd={this.handleOnEnd}
          setData={this.setData}
        />
      );
    }
  }

  WizardContainer.propTypes = {
    /** Initial data object */
    initialData: PropTypes.object, // eslint-disable-line react/forbid-prop-types

    /** Custom reducer function */
    reducer: PropTypes.func,

    /** onEnd handler */
    onEnd: PropTypes.func
  };

  WizardContainer.defaultProps = {
    initialData: {},
    onEnd: () => {},
    reducer: (previousState, action = {}) => ({
      ...previousState,
      ...action.payload
    })
  };

  return WizardContainer;
};
