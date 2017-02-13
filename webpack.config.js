module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/main.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: __dirname + '/dist',
    // With the filename `build.js` so it's dist/build.js
 
    publicPath: '/dist/',
       filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        
         
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
      ]
   },
   resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }

}