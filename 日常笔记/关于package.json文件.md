### 因为  .json 文件  中不能注释

```json
{
  "name": "webpack-get-started",
  "version": "1.0.0",
  "description": "webpack lesson 0311",
  "main": "index.js",
  "scripts": {
     
      //  --mode production:  	告知 webpack 使用相应的模式
      //						1. production： 	产品模式		会对 js 代码进行压缩处理
      //						2. development：	开发者模式	 不会对 js 代码进行压缩处理
      //
      //  webpack.config.js:	webpack 编译过程中的配置文件
      //  当 执行 webpack 时，会自动寻找 根路径下的  webpack.config.js 文件
      //  如下的  --config scripts/webpack.config.js  自定义 webpack 文件位置 和 文件名
      //	
      
      
    "build": "webpack --mode production --config scripts/webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "XuFei",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11"
  }
}

```

