const UOSBuilder = require('uos-bundle-script');
const { join } = require('path');

const outputPaths = ['/Users/zhaowenli/Learn/electron/electron-godan/output/linux-arm64-unpacked']

const appId = 'com.example.app';
const productName = 'example'; // 项目名称
const buildVersion = '0.0.1';

outputPaths.forEach((value) => {
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
          MimeType: 'MimeType=x-scheme-handler/[URL Scheme];x-scheme-handler/[URL Scheme]'
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