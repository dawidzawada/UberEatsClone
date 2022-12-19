import Config from 'react-native-config';

type TConfig = {
  APP_API_URL: string;
};

const configTyped = Config as TConfig;
export default configTyped;
