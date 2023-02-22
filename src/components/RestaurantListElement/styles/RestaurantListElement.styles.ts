import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors, getTextStyles} from '@globals/GlobalStyles';

interface IStyles {
  wrapper: ViewStyle;
  infoContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  priceInfo: TextStyle;
  scoreText: TextStyle;
  scoreContainer: ViewStyle;
}

const stylesDef: IStyles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,

    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: getTextStyles({
    fontSize: 16,
    marginVertical: 8,
    fontFamily: 'UberMove-Medium',
  }),
  scoreContainer: {
    backgroundColor: Colors.grey,
    paddingVertical: 7,
    paddingHorizontal: 6,
    borderRadius: 100,
    position: 'absolute',
    right: 0,
  },
  scoreText: getTextStyles({
    fontSize: 11,
    fontWeight: 'bold',
  }),
  priceInfo: getTextStyles({
    fontSize: 13,
    fontWeight: '500',
    color: Colors.darkgrey,
  }),
};

export const RestaurantListElementStyles = StyleSheet.create(stylesDef);
