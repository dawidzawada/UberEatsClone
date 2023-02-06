import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors, getTextStyles} from '@globals/GlobalStyles';

interface IStyles {
  wrapper: ViewStyle;
  textInput: TextStyle;
  iconContainer: ViewStyle;
  iconBorder: ViewStyle;
}

const stylesDef: IStyles = {
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.lightgrey,
    padding: 12,
    paddingHorizontal: 16,
    margin: 10,
    borderRadius: 50,
  },
  textInput: getTextStyles({
    textAlign: 'left',
    width: '74%',
    fontSize: 16,
  }),
  iconContainer: {
    width: '13%',
  },
  iconBorder: {
    borderLeftWidth: 2,
    borderColor: Colors.grey,
    paddingLeft: 10,
  },
};

export const SearchBarStyles = StyleSheet.create(stylesDef);
