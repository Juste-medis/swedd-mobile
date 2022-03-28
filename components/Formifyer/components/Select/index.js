import React, {PureComponent} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import MultiSelect from 'react-native-multiple-select';

import LabelError from '../LabelError';

export default class Select extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    label: PropTypes.string,
    values: PropTypes.array,
    onSelect: PropTypes.func,
    single: PropTypes.bool,
    searchInputPlaceholder: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    values: [],
    single: true,
    searchInputPlaceholder: 'Search Items...',
    onSelect: () => {},
    error: false,
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  };

  onSelectedItemsChange = selectedItems => {
    const {onSelect} = this.props;
    onSelect(selectedItems);
  };

  render() {
    const {label, values, data, single, searchInputPlaceholder, error} =
      this.props;
    const {
      theme: {
        select: {
          tagRemoveIconColor,
          tagBorderColor,
          tagTextColor,
          selectedItemTextColor,
          selectedItemIconColor,
          itemTextColor,
          submitButtonColor,
        },
      },
    } = this.context;
    return (
      <View>
        <LabelError label={label} error={error} />
        <View style={{marginTop: 10}}>
          <MultiSelect
            hideSubmitButton
            autoFocusInput={true}
            single={single}
            items={data}
            uniqueKey="value"
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={values}
            selectText={searchInputPlaceholder}
            searchInputPlaceholderText={searchInputPlaceholder}
            tagRemoveIconColor={tagRemoveIconColor}
            tagBorderColor={tagBorderColor}
            tagTextColor={tagTextColor}
            selectedItemTextColor={selectedItemTextColor}
            selectedItemIconColor={selectedItemIconColor}
            itemTextColor={itemTextColor}
            displayKey="label"
            styleTextDropdown={{
              paddingStart: 10,
              color: 'grey',
            }}
            styleTextDropdownSelected={{
              paddingStart: 10,
              fontWeight: '500',
            }}
            noItemsText="Aucun élement trouvé ."
            styleListContainer={{
              elevation: 20,
              backgroundColor: 'white',
              marginHorizontal: 4,
            }}
            submitButtonColor={submitButtonColor}
            submitButtonText="OK"
          />
        </View>
      </View>
    );
  }
}
