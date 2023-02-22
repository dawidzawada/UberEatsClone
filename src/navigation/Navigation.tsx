import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TabStack} from './TabStack/TabStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, ViewStyle} from 'react-native';

const Stack = createNativeStackNavigator();

function SettingsScreen() {
  const styles: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={styles}>
      <Text>Settings!</Text>
    </View>
  );
}

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'TabStack'}
            component={TabStack}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
