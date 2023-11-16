const builder = require('electron-builder');
const Platform = builder.Platform;

builder.build({
  targets: Platform.MAC.createTarget(),
  // targets: Platform.LINUX.createTarget(),
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
    extends: null,
    directories: {
      output: 'output',
    },
    mac: {
      category: 'public.app-category.developer-tools',
      target: [
        {
          target: 'dmg',
          arch: [
            'x64', 'arm64'
          ],
        },
        {
          target: 'zip',
          arch: [
            'x64', 'arm64'
          ],
        }
      ],
      entitlementsInherit: 'build/entitlements.mac.plist',
      entitlements: 'build/entitlements.mac.plist',
      icon: 'build/icons/icon.icns',
      asar: true,
    },
    linux: {
      category: 'Development',
      target: 'deb',
      icon: 'build/icons/icon.png',
    }
  },
})
.then(() => {
  console.log('Build completed successfully');
})
.catch((error) => {
  console.error('Error during build:', error);
});
