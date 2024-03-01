import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const AppTextInput = ({ error, ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <View>
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={'#626262'}
        autoCapitalize='none'
        style={[styles.input, focused && styles.focusedInput]}
        {...otherProps}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default AppTextInput;
