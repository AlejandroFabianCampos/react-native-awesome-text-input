var path = require('path');

module.exports = {
    mode: 'production',
    entry: './awesomeStorybook/src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    externals: [
        'react',
        'react-native'
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader!ts-loader',
                exclude: ['/__tests__/', '/node_modules/']
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};