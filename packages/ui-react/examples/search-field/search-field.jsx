import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import cx from 'classnames';

import {
  Icon,
  Input,
} from '../../src';

import './search-field.css';

const searchItems = (items, query) => {
  const pattern = new RegExp(query, 'i');

  return items.filter(item => (
    pattern.test(item.name) ||
    pattern.test(item.company) ||
    pattern.test(item.email)
  ));
};

const itemToString = item => item.name;

export const SearchField = ({ items, ...restProps }) => (
  <Downshift
    {...restProps}
    itemToString={itemToString}
    render={({
      getInputProps,
      isOpen,
      inputValue,
      getItemProps,
      selectedItem,
      highlightedIndex,
    }) => (
      <div className="search-field">
        <Input
          {...getInputProps({
            className: 'search-field__input',
            placeholder: 'Search for something',
            size: 'large',
          })}
        />

        <Icon
          className="search-field__icon"
          name="search"
          size="large"
        />

        {isOpen && (
          <div className="search-field__results">
            {searchItems(items, inputValue).map((item, index) => (
              <div
                {...getItemProps({
                  index,
                  item,
                  className: cx('search-field__item', {
                    'search-field__item--selected': selectedItem && selectedItem.name === item.name,
                    'search-field__item--highlighted': highlightedIndex === index,
                  }),
                })}
                key={item.key}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  />
);

SearchField.defaultProps = {
  items: [],
};

SearchField.propTypes = {
  items: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};
