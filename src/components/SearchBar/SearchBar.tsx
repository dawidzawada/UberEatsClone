import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {SearchBarStyles as styles} from './styles/SearchBar.styles';
import SearchIcon from '@icons/SearchIcon';
import OptionsIcon from '@icons/OptionsIcon';

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <View style={styles.wrapper}>
      <View style={styles.iconContainer}>
        <SearchIcon size={30} />
      </View>
      <TextInput
        style={styles.textInput}
        value={query}
        onChangeText={setQuery}
        placeholder={'Food, drinks, restaurants, shops etc.'}
      />
      <View style={[styles.iconContainer, styles.iconBorder]}>
        <OptionsIcon size={30} />
      </View>
    </View>
  );
};

export default SearchBar;
