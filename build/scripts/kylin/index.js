const { join } = require('path');
const kylinBuilder = require('kylin-bundle-script');

const output = join(process.cwd(), 'output', 'kylin');
kylinBuilder.buildKylin({
  appName: 'godan', // change to productName
  appId: 'com.electron.godan',
  unpackedDir: join(process.cwd(), 'output', 'linux-arm64-unpacked'),
  outputPath: output,
  version: '0.0.1',
  controlFile: {
    Package: 'godan',
    Version: '0.0.1',
    Architecture: 'arm64',
    Maintainer: 'godaner<>',
    Description: 'desc',
  },
  desktopFile: {
    Name: 'godan',
    'Name[zh_CN]': '狗蛋',
    Exec: '/opt/apps/com.electron.godan/electron-godan --no-sandbox',
    Icon: 'com.electron.godan',
    Type: 'Application',
  },
  svgPath: join(process.cwd(), 'build', 'icons', 'icon.svg'),
});
