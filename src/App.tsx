/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RestaurantListElement from '@components/RestaurantListElement/RestaurantListElement';
import SearchBar from '@components/SearchBar/SearchBar';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Components:</Text>
          <SearchBar />
          <RestaurantListElement
            title={"McDonald's - Katowice PKP"}
            score={4.2}
            deliveryPrice={2}
            deliveryCurrency={'$'}
            shortestDeliveryTime={15}
            distance={1.2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
