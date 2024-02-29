import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={'#626262'}
      autoCapitalize='none'
      style={[styles.input, focused && styles.focusedInput]}
      {...otherProps}
    />
  );
};

export default AppTextInput;
