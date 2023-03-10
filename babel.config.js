module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@globals': './src/globals',
          '@icons': './src/icons',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
