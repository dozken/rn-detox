module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  specs: 'e2e',
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
  apps: {
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/rndetox.app',
      build:
        'export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -workspace ios/rndetox.xcworkspace -UseNewBuildSystem=YES -scheme rndetox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
      // 'build': 'export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -project ios/rndetox.xcodeproj -UseNewBuildSystem=NO -scheme rndetox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet',
    },
    'ios.debug': {
      // 'build': 'xcodebuild -project ios/rndetox.xcodeproj -UseNewBuildSystem=NO -scheme rndetox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/rndetox.app',
      build:
        'xcodebuild -workspace ios/rndetox.xcworkspace -scheme rndetox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 11 Pro',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_API_28_AOSP',
      },
    },
    pixel3a: {
      type: 'android.attached',
      device: {
        adbName: '9A9AY1CDPS', // lookup from `adb devices` command
      },
    },
  },
  configurations: {
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.none': {
      type: 'ios.none',
      session: {
        server: 'ws://localhost:8099',
        sessionId: 'com.wix.demo.react.native',
      },
    },
    'android.real.debug': {
      device: 'pixel3a',
      app: 'android.debug',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
  },
};
