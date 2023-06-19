/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },

  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'cjs', 'json'] //타입스크립트를 사용 시에 추가해줘야 한다. 
  },

};
