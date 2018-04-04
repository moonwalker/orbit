import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import cx from 'classnames';

import {
  Icon,
  Input,
  ButtonIcon,
  Dropdown,
  ListGroup,
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

const itemToString = item => (item && item.name) || '';

export const SearchField = ({ items, ...restProps }) => (
  <Downshift
    {...restProps}
    itemToString={itemToString}
    render={({
      getInputProps,
      isOpen,
      reset,
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

        {inputValue ?
          (
            <ButtonIcon
              className="search-field__icon search-field__icon--clear"
              type="button"
              name="close"
              size="large"
              onClick={() => reset({ inputValue: '' })}
            />
          ) :
          (
            <Icon
              className="search-field__icon search-field__icon--search"
              name="search"
              size="large"
            />
          )
        }

        {isOpen && (
          <Dropdown className="search-field__results">
            <ListGroup
              render={({ getListGroupItemProps }) =>
                searchItems(items, inputValue).map((item, index) => (
                  <li
                    {...getItemProps({
                      index,
                      item,
                      ...getListGroupItemProps({
                        className: cx({
                          'search-field__item--selected': selectedItem && selectedItem.name === item.name,
                          'search-field__item--highlighted': highlightedIndex === index,
                        }),
                      }),
                    })}
                    key={item.key}
                  >
                    {item.name}
                  </li>
                ))
              }
            />
          </Dropdown>
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
