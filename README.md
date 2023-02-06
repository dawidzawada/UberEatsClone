## UberEatsClone - RN Pet Project

This repo is pet project for learning purposes.

### Installation
1. Use `yarn` in main folder
2. `cd ios` and `pod install`


### Structure
Basic folder structure:
```
.
├── README.md
├── __tests__
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── react-native-config.ts
├── react-native.config.js
├── android
├── ios
├── node_modules
├── src
│   ├── App.tsx
│   ├── api
│   ├── assets
│   │   ├── fonts
│   ├── components
│   │   └── SearchBar
│   │       ├── SearchBar.tsx
│   │       └── styles
│   │           └── SearchBar.styles.ts
│   ├── globals
│   │   └── GlobalStyles.ts
│   ├── icons
│   │   ├── OptionsIcon.tsx
│   │   └── SearchIcon.tsx
│   ├── locale
│   ├── navigation
│   └── utils
├── tsconfig.json
└── yarn.lock
```

Most used `src` folders can be accesed with `@` path shortcut:
```
'@assets': './src/assets',
'@globals': './src/globals',
'@icons': './src/icons',
'@components': './src/components',
```

Thanks to that imports are shorter:

Before:
```
import {Colors, getTextStyles} from '../../../globals/GlobalStyles';
```
After:
```
import {Colors, getTextStyles} from '@globals/GlobalStyles';
```


### Environment config: 

Thanks to `react-native-config` npm package we can use `.env` environment consts file with full TypeScript support. Types for new consts can be added inside `react-native-config.ts`
file like this:
```
type TConfig = {
  APP_API_URL: string;
};
```
