import React from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

export const NumsOfMonth = [
  {label: '1 Month', value: '1'},
  {label: '2 Months', value: '2'},
  {label: '3 Months', value: '3'},
  {label: '4 Months', value: '4'},
  {label: '5 Months', value: '5'},
  {label: '6 Months', value: '6'},
  {label: '7 Months', value: '7'},
  {label: '8 Months', value: '8'},
  {label: '9 Months', value: '9'},
  {label: '10 Months', value: '10'},
  {label: '11 Months', value: '11'},
  {label: '12 Months', value: '12'},
];

export const DropDownView = ({data, isFocus, value, setValue, setIsFocus}) => (
  <Dropdown
    style={[DropDownStyle.dropdown, isFocus && {borderColor: 'blue'}]}
    placeholderStyle={DropDownStyle.placeholderStyle}
    selectedTextStyle={DropDownStyle.selectedTextStyle}
    inputSearchStyle={DropDownStyle.inputSearchStyle}
    data={data}
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder={!isFocus ? 'Select Month(s)' : '...'}
    searchPlaceholder="Search..."
    value={value}
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}
    onChange={item => {
      setValue(item.value);
      setIsFocus(false);
    }}
  />
);

export const DropDownStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
