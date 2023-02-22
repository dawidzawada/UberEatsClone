import {Text, View, ViewStyle} from 'react-native';
import * as React from 'react';

const CartScreen = () => {
  const styles: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={styles}>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;
