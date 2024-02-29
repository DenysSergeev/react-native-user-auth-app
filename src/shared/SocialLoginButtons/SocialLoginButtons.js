import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './styles';

const SocialLoginButtons = ({
  onPressGoogle,
  onPressApple,
  onPressTwitter,
  onPressFacebook,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.continueWithText}>or continue with</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity onPress={onPressGoogle} style={styles.socialButton}>
          <Ionicons name='logo-google' color='#000' size={25} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressApple} style={styles.socialButton}>
          <Ionicons name='logo-apple' color='#000' size={25} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressTwitter} style={styles.socialButton}>
          <Ionicons name='logo-twitter' color='#000' size={25} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressFacebook} style={styles.socialButton}>
          <Ionicons name='logo-facebook' color='#000' size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

SocialLoginButtons.propTypes = {
  onPressGoogle: PropTypes.func.isRequired,
  onPressApple: PropTypes.func.isRequired,
  onPressTwitter: PropTypes.func.isRequired,
  onPressFacebook: PropTypes.func.isRequired,
};

export default SocialLoginButtons;
