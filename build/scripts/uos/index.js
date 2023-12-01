const UOSBuilder = require('uos-bundle-script');
const { join } = require('path');

const unpackedPaths = [join(process.cwd(), 'output', 'linux-arm64-unpacked')]

const appId = 'com.electron.godan';
const productName = 'godan'; // 项目名称
const buildVersion = '0.0.1';

unpackedPaths.forEach((value) => {
  if (value.includes('linux') && value.includes('unpacked')) {
      const execFileName = 'electron-godan'; // package.json.name
      const output = join(process.cwd(), 'output', 'uos');
      UOSBuilder.buildUOS({
        appId, output,
        svgPath: join(process.cwd(), 'build', 'icons', 'icon.svg'),
        unpackedDir: value,
        removeTemplateDir: false,
        version: buildVersion,
        DesktopInfo: {
          appId,
          name: productName,
          version: buildVersion,
          description: 'desc',
        },
        DesktopEntry: {
          Categories: 'dev', //
          Name: productName,
          GenericName: productName,
          Type: 'Application',
          Exec: `/opt/apps/${appId}/files/${execFileName} %U --no-sandbox`,
          Icon: `${appId}`,
          MimeType: 'MimeType=x-scheme-handler/electron-godan;x-scheme-handler/godan'
        },
        controlFile: {
          Source: appId,
          Section: 'dev',
          Priority: 'optional',
          Maintainer: 'godaner<xx@bb.com>',
          StandardsVersion: '4.1.3',
          Homepage: 'https://github.com/xx',
          VcsBrowser: `https://salsa.debian.org/debian/${appId}`,
          VcsGit: `https://salsa.debian.org/debian/${appId}.git`,
          Package: appId,
          Architecture: 'any',
          Description: 'desc',
        }
      })
    }
});