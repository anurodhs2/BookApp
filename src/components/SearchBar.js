import React from 'react';
import {TextInput, Image, View, Text} from 'react-native';
import styles from './styles';

export default SearchBar = (props) => {
  const {_search, color, backgroundColor} = props;
  return (
    <View style={styles.searchBar}>
      <TextInput
        onChangeText={_search}
        placeholderTextColor={color}
        style={[styles.input,{ backgroundColor: backgroundColor }]}
        placeholder="Search"
      />
    </View>
  );
};
