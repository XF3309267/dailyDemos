### react 基础元素 API

1. ### `React.Component`      

   -  `React.Component` 是使用 [ES6 classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 方式定义 React 组件的基类： 
   
2. ### `React.memo`    props 相等 复用最近一次的 渲染结果

   1. ```jsx
      function MyComponent(props) {
        /* 使用 props 渲染 */
      }
      function areEqual(prevProps, nextProps) {
        /*
        如果把 nextProps 传入 render 方法的返回结果与
        将 prevProps 传入 render 方法的返回结果一致则返回 true，
        否则返回 false
        */
      }
      // React.memo() 组件的 第二个参数，是可选参数（是一个方法名）
      // 如上，接收 原先的 props 和 新的 props，
      //      返回 true ，表示 React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
      // 		返回 false，表示  重新渲染
      export default React.memo(MyComponent, areEqual);
      ```

   2. **用途：** 如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 `React.memo` 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现 

3. ### `createElement()`  用以创建 DOM 元素

   1. ```react
      
      // type: 元素类型, 如： 'h1' 、'div' 、 'span'。>>>  也可以是 react 组件
      // [props]: 标签的各种属性，如 {className: "main",style:{color:'red'}}
      // 第三个参数，以及之后的元素，都是 该 react 元素的子元素
      React.createElement(
        type,
        [props],
        [...children]
      )
      ```

4. ### `cloneElement()`    克隆元素

   1. ```react
      React.cloneElement(
        element,
        [props],
        [...children]
      )
      /*
      	以 element 元素为样板克隆并返回新的 React 元素。
      	返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。
      	新的子元素将取代现有的子元素，而来自原始元素的 key 和 ref 将被保留。
      
      	相同的 ref 将添加到克隆后的新元素中：
      		意思是说，克隆出的新元素 与  旧元素 的 ref 相同，在这种情况下，ref 只会在新元素上显示了
      
      */
      ```

5. ### `isValidElement()`  检测是否为  react 元素

   - ```react
     React.isValidElement(object)    // 是，则返回 true，否，则返回 false
     ```

6. #### ` React.Children.map(children,function[(thisArg)]) `

   - **返回一个数组**

7. #### `React.Children.forEach(children)`    

   #### <font color=red>  children === this.props.children  </font> 

8. #### `React.Children.count(children) `  子元素数量

9. #### `React.Children.only(children)` 

   - **验证 children 只有一个  React 元素，是，则返回  该元素；否，则抛出错误**

   - ##### <font color=red> 注意：不是数组，且使用 map 返回的数组也不行</font>

10. ####  `React.Children.toArray(children)` <font color=red> 有待考究</font>

11. #### `React.Suspense  `      ` React.lazy`

    - ```react
      const OtherCom = React.lazy(()=> import ('./OtherCom'))
      function  MyCom(){
          return(
          // 显示 <Spinner> 组件直至 OtherComponent 加载完成
          <React.Suspense fallback={<Spinner />}>
            <div>
              <OtherComponent />
            </div>
          </React.Suspense>
          )
      }
      	// React.lazy 的使用 必须有   React.Suspense 组件的 包裹
      	// fallback  中存放 当组件（使用了 lazy 的组件）未加载时，渲染的组件
          
      ```

12. ### `React.createRef`    `React.forwardRef`   <font color=red> 有待考究</font>

