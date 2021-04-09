#### babel-loader

1. `   npm install -D babel-loader @babel/core @babel/preset-env webpack ` （如果安装了 webpack，就不需要安装了）

2. **用途：**  Babel是一个JavaScript编译器，能够让我们放心的使用新一代JS语法 

3. **webpack.config.js   rules 数组添加**

   ```js
       {
         test: /\.m?js$/,
             //  exclude: 排除 这些目录下的文件（即这些目录下的文件 不用做处理）
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env']
           }
         }
       }
   ```

#### webpack-merge

1.  **作用：**  实现多个 **webpack  配置文件   进行合并**

2. **使用多个  webpack 配置文件**（在 src/package.json）

   ```json
     "scripts": {
       "build": "webpack --mode production --config scripts/webpack.config.prod.js",
       "dev": "webpack-dev-server --mode production --config  scripts/webpack.config.dev.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
   ```

   **对于不同的环境 使用不同的 webpack 配置文件**