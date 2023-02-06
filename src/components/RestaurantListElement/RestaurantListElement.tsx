import React from 'react';
import {Image, Text, View} from 'react-native';
import {RestaurantListElementStyles as styles} from './styles/RestaurantListElement.styles';

type TRestaurantListElementProps = {
  title: string;
  score: number;
  deliveryPrice: number;
  deliveryCurrency: string;
  shortestDeliveryTime: number; //minutes
  distance: number; //kilometers
};

const RestaurantListElement = ({
  title,
  score,
  deliveryPrice,
  deliveryCurrency,
  shortestDeliveryTime,
  distance,
}: TRestaurantListElementProps) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../../assets/restaurant-image.png')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{score.toFixed(1)}</Text>
        </View>
        <Text style={styles.priceInfo}>
          {`Delivery price: ${deliveryPrice}${deliveryCurrency} - ${distance.toFixed(
            1,
          )} km - ${shortestDeliveryTime} - ${shortestDeliveryTime + 10} min`}
        </Text>
      </View>
    </View>
  );
};

export default RestaurantListElement;
