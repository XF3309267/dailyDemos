## replace  系列

1. **replaceWith( content )**				 A.replaceWith( B ) :  A  被 B 替换

   1. **content**  的类型：htmlString、Element、Array、jQuery 、Function( )

   2. **Function()** :  方法中 return 需要替换的元素  **( 该 function  中不自带  index  和 html 参数)**

   3. **注意：**  若 content 是 存于文档中的元素（B），B  会移动到被替换元素的位置（不会进行 ‘ 复制再替换 ’）    

   4. **问：** 若 一个元素（B）原来不在 文档内，B 替换了一个元素,后 又使用方法 再次让其出现在  文档内        

      **答：** 

      ```js
        /*
                  const but = $('<button>',{
                      text:'bbb',
                  })
                  but 是一个 不存在于 文档中的一个元素
                  1.  若 but 使用了 其他的方法，导致文档中出现了 多个该元素
      
                  ！！！  注意：  一般出现这种情况，只有最后一个是他本身，而其他都是他的 克隆副本
                  ！！！          所以在代码中再 对 but 进行操作时，只会对  本身 进行操作
      
              */
      	对于上述问题，
          回答：  
          	1. B 替换了一个元素 >>   B 出现在了文档里（也许不止一个，不过只有最后一个是其本身）
              2. 对 B 再次操作，让其出现在 文档上（如：再使用 $('body').append(B))，只会 对其
                 ‘ 本身 ’  进行移动 
                 
              	
      ```

2. **replaceAll(content)**       A.replaceAll( B ) :  A  替换 B

   1. content 类型：selector、 jQuery、 Array、Element    **（ 不可以是  function ）**