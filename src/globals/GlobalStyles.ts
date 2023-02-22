import {TextStyle} from 'react-native';

export const getTextStyles = (stylesOverwrite: TextStyle): TextStyle => {
  return {
    //Set global style here
    fontFamily: 'UberMove-Regular',
    color: Colors.carbon,
    ...stylesOverwrite,
  };
};

export const Colors: Record<string, string> = {
  darkgrey: '#8a8a8a',
  grey: '#c7c7c7',
  lightgrey: '#e8e8e8',
  carbon: '#333333',
};
