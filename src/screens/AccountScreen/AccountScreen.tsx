import {Text, View, ViewStyle} from 'react-native';
import * as React from 'react';

const AccountScreen = () => {
  const styles: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={styles}>
      <Text>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;
