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
            styleDropdownMenuSubsection={{
              borderWidth: 1,
              height: 50,
              borderColor: 'black',
              borderRadius: 10,
            }}
            styleInputGroup={{
              height: 50,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
            }}
            styleItemsContainer={{
              paddingHorizontal: 15,
            }}
            styleListContainer={{
              elevation: 10,
              backgroundColor: 'white',
              paddingVertical: 15,
            }}
            styleRowList={{
              paddingTop: 6,
            }}
            styleTextDropdown={{
              paddingStart: 10,
            }}
            styleTextDropdownSelected={{
              paddingStart: 15,
              fontWeight: 'bold',
            }}
            noItemsText="Aucun élement trouvé ."
            submitButtonColor={submitButtonColor}
            submitButtonText="OK"
          />
        </View>
      </View>
    );
  }
}
