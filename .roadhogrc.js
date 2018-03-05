export default {
  entry: 'src/index.js',
  define: {
    'process.env': {},
    'process.env.STAGE_ENV': process.env.STAGE_ENV || 'dev',
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.NODE_ENV,
  },
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        [
          'import',
          {
            libraryName: 'antd',
            style: true
          }
        ]
      ]
    },
    staging: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        [
          'import',
          {
            libraryName: 'antd',
            style: true
          }
        ]
      ]
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        [
          'import',
          {
            libraryName: 'antd',
            style: true
          }
        ]
      ]
    }
  }
}
