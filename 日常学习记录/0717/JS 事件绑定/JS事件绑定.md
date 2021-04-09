# Javascript  事件绑定

### 1. 行内事件绑定  (示例： onClick="handClick()" )

1. ```html
   
   <button onClick="handClick()">按钮</button>
   
   <script>
   	let  btn = document.querySelector('#btn')
       handClick = function(e){
           e = e || window.event
           target = e.target || e.srcElement
       }
   </script>
   ```

1. **事件 绑定 与 取消事件绑定  的 兼容写法**

   1. **事件绑定**

      - ```js
        function addEvent(dom,type,fn){
            if(dom.addEventListener){
                dom.addEventListener(type,fun)
            }else{
                if(dom.attachEvent){
                    dom.attachEvent('on'+type,fun)
                }
            }
        }
        ```

   2. **取消事件绑定**

      - ```js
        function clearEvent(dom,type,fn){
            if(dom.removeEventListener){
                dom.removeEventListener(type,fn)
            }else{
                if(dom.detachEvent){
                    dom.detachEvent('on'+type,fn)
                }
            }
        }
        ```

        

### 2. [Event  对象](https://www.cnblogs.com/websmile/p/8807334.html)

1. **事件对象  event  的获取**

   1. 在触发事件函数的时候，我们会获得一个  **event 对象** ，且不用传递给 事件函数，直接在 函数创建的 头部 加入 e 参数即可。

   2. **对于 IE 的获取 Event 方式的不同的兼容写法**

      - ```js
            handClick = function(e){
                // window.event   >>>>   IE 获取  Event对象的方式
                e = e || window.event
                //  e.srcElement  >>>>   IE 获取  事件绑定元素的方式
                target = e.target || e.srcElement
            }
        ```

   3. **Event 对象属性  （只提重要的 属性）**

      1. **formElement** : 对于鼠标事件， 鼠标移入 移出，**formElement**  引用的是 移出的元素
      2. **toElement** :      对于鼠标事件， 鼠标移入 移出，**tomElement**  引用的是 移入的元素
      3. **keycode**：        对于  keydown    和  keyup ，显示的是   被敲击的键生成的 Unicode 字符码 
      4.  **eventPhase** ： 事件处于什么阶段，  捕获  还是 冒泡
      5.  **timeStamp** ： 返回  距离页面初始化  到  事件生成的  毫秒数

   4. **Event 一些属性  兼容的写法**

      1. ```js
         // 获得 event 对象兼容的方法
         event = e || window.event
         // 获得 target 对象兼容的方法
         target = event.target || event.srcElement
         // 阻止浏览器默认行为的方法
         event.preventDefault ? event.preventDefault():(event.returnValue = false)
         // 阻止冒泡
         event.stopPropagation ? event.stopPropagation():(event.cancelBubble = false)
         // 阻止自身事件的响应
         event.stopImmediatePropagation() 
         阻止 除了 当前事件函数之外的 所有事件函数  执行，并阻止冒泡
         ```

2. **target   与  currentTarget**

   1. **target**  :    触发该事件函数的 元素
   2. **currentTarget** ：  指的是 当前事件函数所绑定的  元素

3. 