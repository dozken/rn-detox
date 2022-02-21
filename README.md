# Expo Detox Example
<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

Example of React Native build on Expo and tested with Detox

## 🚀 How to use
`yarn install`

`expo prebuild`

Install iOS packages: `npx pod-install`  

run:  
`yarn ios`
`yarn android`

`yarn android --device` to choose a device to run


we don't actually need build scripts in detox.config.js, `expo run android|ios` command is doing build for us

run test `test:ios` `test:android-debug`
### Links
https://github.com/expo/config-plugins/tree/master/packages/detox  
https://github.com/wix/Detox/blob/master/examples/demo-react-native/detox.config.js


