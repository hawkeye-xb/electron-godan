const builder = require('electron-builder');
const UOSBuilder = require('uos-bundle-script');
const { join } = require('path');
const Platform = builder.Platform;

const appId = 'com.example.app';
const productName = 'example'; // 项目名称
const buildVersion = '0.0.1';

builder.build({
  // targets: Platform.MAC.createTarget(),
  targets: Platform.LINUX.createTarget(),
  config: {
    appId, productName, buildVersion,
    copyright: 'Copyright',
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
      notarize: false,
    },
    linux: {
      category: 'Development',
      target: [
        {
          target: 'deb',
          arch: [
            'x64', 'arm64'
          ],
        }
      ],
      icon: 'build/icons/icon.png',
      maintainer: 'your@contact.com'
    }
  },
})
.then((outputPaths) => {
  // value: output path.
  console.log('Build completed successfully.');
  outputPaths.forEach((value) => {
    if (value.includes('linux') && value.includes('unpacked')) {}
  });
})
.catch((error) => {
  console.error('Error during build:', error);
});

