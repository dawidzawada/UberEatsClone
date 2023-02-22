import {Text, View, ViewStyle} from 'react-native';
import * as React from 'react';

const SearchScreen = () => {
  const styles: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={styles}>
      <Text>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
