1.  **A.append(content/fn)**    A 要在自己的  **子元素集**  中添加什么
- **返回值：**  返回 一个新的  子元素集
- 参数解释： <!--参数可以是 一个元素 或 一个方法： function(index,html)-->
     - **content** 	
       - <!--官方： 一个或多个其他DOM元素，文本节点，元素数组和文本节点，HTML字符串或jQuery对象 --> 
       - 可以是 文档中的元素 	 `$('#test')`    （会将   该元素从原来的位置移动至  A）
       - 可以是  新创建的    html元素 字符串形式    `'<p> 插入的内容  </p>'     `
       - 可以是   新创建的元素    `let text = document.create("p"); text.innerHTML('插入的内容')  `
       - **加入多个元素**
         - 可以将上述多个元素以逗号分隔   作为 content
         - 可以将  上述多个元素存入数组 ， 将数组名放入其中
         - 可以  多个元素 逗号分隔，且 其中又有数组
     - **function (index,html)**
       - 例子： `A.append(  function(index,html){ return       })`
       - **index** :  是指  当 A 是个集合的时候，index 用以 表示各个元素在 集合序列中位置（以 0 开始）
       - **html**:     是指   A 的所有后代元素  或 A 集合中每个元素的所有后代元素
       - **return  承接  A 所需要扩展的  内容**，如：` {return '<>'}`
         - **问：** return 的内容类型 是否可以如  content 的内容一样。是否也可以多个元素
         - **答：** （没有经过验证，自我觉得）返回 数组类型 可以，返回 以逗号分隔 的多个元素，不行
         - **结尾：**  对于问题   有待考究
       - **附加：**  **A.append( fun )   可以直接  接函数名**
       - **感悟：** 对于 append 使用 function 来 扩展内容，其真正用意在于：当 A 是一个集合时，针对  每一个 元素 添加不同的 内容。
   - **对于  append   发生的  事件移动与复制：** 复制了 多个事件绑定 ， 多个事件效果仍然有效
- **append()  与  prepend() 方法是差不多的**
  - 不同在于： append() 是将  content  插入到 末尾； prepend() 是将  content  插入到首段
2.  **A.appendTo( target )**   将  A  添加至  target
    - target 的类型： selector 、 element、 htmlString、array、 jquery
    - **appendTo()   与   prependTo()  方法类似 ，只是插入的位置不同而已**
3.  **A.after( arg)    before()**        （ 在此我只讲   **after()** ,因为两者只是  插入的 位置不同而已）
    - **arg  类型：**    content  ( 可支持多个  元素 )  、  function(index)、 function(index,html)
    - 解释： 将 arg 内容 放在 A元素 的后面
4.  **A.insertAfter(target)    insertBefore(target)**     在此我只讲   insertAfter( )
    - **target 类型：** htmlString 、 selector 、 元素  、 数组、 jquery 对象
    - 解释： 将 A 放置在  target 的后面
5.  **注意：**  
    1.  任何对文档操作的方法，当其 content  是一个函数时，当你 函数内 return 是 自身的参数 html，虽然 html 是文档中已存在的元素，但不会发生  文档元素位置的移动，而是复制新的一份出来
    2.  任何对文档操作的方法，当 content 中是  function 类型的时候，function 总是可以使用两个参数：index、html
        - index：  当 A 是一个集合时，index 表示 集合中元素的 位置（以 0 开始）
        - html： 是指 A  或  A 集合中  元素( 因为 A 是集合时，是按 集合 逐个读取里面的元素 )