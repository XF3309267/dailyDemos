#### React 组件的几种形式   

[^注意]: 自定义组件，组件名 必须以大写字母开头。否则，会被视为 原生 DOM 标签。

1. **函数式组件**   （也被称为   无状态组件；没有 state ，接收 props）

   ```react
   import React from’'react'
   export default function App(){
       return(
       	<div>
           	这是一个函数式组件
           </div>
       )
   }
   const Header = ()=>{
       return(
           <h1> 这是一个函数式组件</h1>
       )
       // 如果 return 中的内容很简短的话，可以省略 return 和 括号
       // const Hearder = ()=> <h1> 这是一数式组件</h1>
   } 
   ```


#### React 类组件 

1.  **问： 为什么  `<App/> ` 这样的自定义组件可以使用 **

   - **答：** 

     ```react
     import React, {Component} from 'react'
     import {render} from  'react-dom'
     export default  class App extends Component{
         render(){
             return (
             	<div>
                 	这是  App  界面
                 </div>
             )
         }
     }
     //  使用 App 组件： 				             
     //  render(<App desc="这是对组件的描述"/>,document.getElementById('root'));
     
     // 等价于： 
     	const app = new App({
             desc:'这是对组件的描述'
         }).render()
     // 使用  app：
     //    render(app,document.getElementById('root'))
     
     ```

##### <font color=red>  当 React 元素为 用户自定义组件时，会将 JSX 所接受的属性 转换为 “props”对象，传递给组件 </font>

##### <font color=red>传递至 自定义组件的 props 数据，不能进行修改 </font>



