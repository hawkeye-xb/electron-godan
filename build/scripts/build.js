const builder = require('electron-builder');
const Platform = builder.Platform;

builder.build({
  targets: Platform.MAC.createTarget(),
  config: {
    appId: 'com.example.app',
    productName: 'example',
    // artifactName: '${productName}-${version}-${platform}-${arch}.${ext}',
    copyright: 'Copyright',
    buildVersion: '0.0.1',
    files: [
      {
        from: 'dist',
        to: '',
      },
      'package.json',
      'index.html'
    ],
    // extraMetadata: {
    //   main: 'dist/main.js',
    // },
    extends: null,
    directories: {
      // buildResources: './dist',
      output: 'output',
    },
    mac: {
      target: 'dmg',
      entitlementsInherit: 'build/entitlements.mac.plist',
      entitlements: 'build/entitlements.mac.plist',
      icon: 'build/icons/icon.icns',
      asar: false,
    }
  },
})
.then(() => {
  console.log('Build completed successfully');
})
.catch((error) => {
  console.error('Error during build:', error);
});
