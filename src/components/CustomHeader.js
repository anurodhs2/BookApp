import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from './styles';

export default CustomHeader = (props) => {
  const {showBackIcon, onBackIconPress, titleText, numberOfLines} = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.backIconContainer}>
        {showBackIcon && (
          <TouchableOpacity
            disabled={!onBackIconPress}
            onPress={() => {
              onBackIconPress && onBackIconPress();
            }}>
            <Image
              style={styles.backIconStyle}
              source={require('./../../assets/common/backIcon.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.headerText} numberOfLines={numberOfLines}>
        {titleText}{' '}
      </Text>
    </View>
  );
};
