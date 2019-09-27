import React from 'react';
import {TextInput, TextInputProps, StyleProp} from 'react-native';

export interface PhoneInputProps {
  initialCountry?: string;
  allowZeroAfterCountryCode?: boolean;
  disabled?: boolean;
  value?: string | null;
  style?: any;
  flagStyle?: object;
  textStyle?: object;
  textProps?: TextInputProps;
  textComponent?: React.ReactElement;
  offset?: number;
  pickerButtonColor?: string;
  pickerBackgroundColor?: string;
  pickerItemStyle?: object;
  cancelText?: string;
  confirmText?: string;
  buttonTextStyle?: object;
  onChangePhoneNumber?: (phoneNumber: string) => void;
  onSelectCountry?: (iso2: string) => void;
  onPressFlag?: () => void;
  countriesList?: string[];
}

export default class PhoneInput extends React.Component<PhoneInputProps> {}
