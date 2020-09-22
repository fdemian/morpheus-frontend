const { override, fixBabelImports } = require('customize-cra');

const imports = [
  {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  },
  {
    libraryName: 'ant-design-pro',
    libraryDirectory: 'lib',
    style: 'css',
    camel2DashComponentName: false,
  },
];

module.exports = override(
   fixBabelImports('antd', imports),
   new AntdDayjsWebpackPlugin()
);
