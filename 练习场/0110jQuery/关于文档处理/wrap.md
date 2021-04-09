## 					wrap  （包裹元素）

1. **A.wrap(content)** 

   1. **注意：** wrap( ) 方法不会移动元素，只会复制元素。如：若 content 是文档中的一个元素，wrap( ) 方法会先复制一份 后 进行包裹。
   2. **content 类型**：selector 、 htmlString、element、jquery、 function
      1. **注意：** function  只有  function( index ) 这样一种形式

2. **A.unwrap( )** 

   1. **unwrap( )**  不需要接参数
   2. **解释：**会对  A  进行一次 “ 剥削 ”（除去 一层父级元素），仅此而已

3. **A.wrapInner( content ) **

   1.  **content 类型**：selector 、 htmlString、element、jquery、 function
      1. **注意：** function  只有  function( index ) 这样一种形式
   2. **解释：** 对  A 的子集元素，使用  content 进行  包裹

4. **A.wrapAll( content )**

   1. **wrapAll()  content 与   wrap()  content 类型一致**

      1. **注意：**  wrapAll( ) 中的 function，不接任何参数

   2. **解释：** 将 A 用  content 进行包裹

      1. **区分 wrap()   wrapAll()**      下面所讲的 例子中  A 是一个集合（即 不只为一个元素）

         - (A  是一个集合的时候，wrap  与 wrapAll 才有不同的效果。)   

         - A.wrap( content)   ：    会将  A  中的 每一个元素  都用 content 包裹
         - A.wrapAll( content ) :    会将  A  中的所有元素  都用  content 进行  包裹