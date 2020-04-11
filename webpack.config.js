const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',//production
    devtool: 'eval', //hidden-source-map 
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },
    entry: {
        app: './client' //client.tsx 파일을 통하여 app.js파일을 만들 것이고 그 만든 파일은 output 에 적혀 있는 __dirname/dist 밑에 생긴다. 
    },//module 와 plugins가 처리 과정이다.
    module: {
        rules: [{
            test: /\.tsx?$/, //ts 또는 tsx 파일 같은경우는 atl 로더를 통하여 변화를 시키겠다.
            loader: 'awesome-typescript-loader',
        }]
    },
    plugins: [],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }

}