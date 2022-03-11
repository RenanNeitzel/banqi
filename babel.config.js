module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@config': './src/config',
          '@hooks': './src/hooks',
          '@domain': './src/domain',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@themes': './src/themes',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
