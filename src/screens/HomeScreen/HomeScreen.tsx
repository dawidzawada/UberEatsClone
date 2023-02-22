import {ScrollView, Text, View, ViewStyle} from 'react-native';
import SearchBar from '@components/SearchBar/SearchBar';
import RestaurantListElement from '@components/RestaurantListElement/RestaurantListElement';
import * as React from 'react';

const HomeScreen = () => {
  const styles: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <View style={styles}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
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
    </View>
  );
};

export default HomeScreen;
