# 前端必须掌握的基础

    1、DOM结构 —— 两个节点之间可能存在哪些关系以及如何在节点之间任意移动。
    2、DOM操作  ——如何添加、移除、移动、复制、创建和查找节点等。
    3、事件    —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别。
    4、XMLHttpRequest —— 这是什么、怎样完整地执行一次GET请求、怎样检测错误。
    5、严格模式与混杂模式 —— 如何触发这两种模式，区分它们有何意义。
    6、盒模型 —— 外边距、内边距和边框之间的关系，及IE8以下版本的浏览器中的盒模型
    7、块级元素与行内元素 —— 怎么用CSS控制它们、以及如何合理的使用它们
    8、浮动元素——怎么使用它们、它们有什么问题以及怎么解决这些问题。
    9、HTML与XHTML——二者有什么区别，你觉得应该使用哪一个并说出理由。
    10、JSON  —— 作用、用途、设计结构。

#### 1、DOM结构——两个节点之间可能存在哪些关系以及如何在节点之间任意移动。

        document.documentElement     返回文档的根节点<html> 
        document.body     <body> 
        document.activeElement 返回当前文档中被击活的标签节点(ie) 
        event.fromElement        返回鼠标移出的源节点(ie) 
        event.toElement       返回鼠标移入的源节点(ie) 
        event.srcElement     返回激活事件的源节点(ie) 
        event.target         返回激活事件的源节点(firefox) 
        当前对象为node 
        返回父节点：node.parentNode, node.parendElement, 
        返回所有子节点：node.childNodes（包含文本节点及标签节点）,node.children 
        返回第一个子节点：node.firstChild 
        返回最后一个子节点： node.lastChild 
        返回同属上一个子节点：node.nextSibling 
        返回同属下一个子节点：node.previousSibling 
        parentNode和parentElement功能一样，childNodes和children功能一样。但是parentNode和
        childNodes是符合W3C标准的，可以说比较通用。而另外两个只是IE支持，不是标准，Firefox就不支持 
        ,所以大家只要记得有parentElement和children就行了 

#### 2、DOM操作——怎样添加、移除、移动、复制、创建和查找节点。

    （1）创建新节点
          createDocumentFragment()    //创建一个DOM片段
          createElement()   //创建一个具体的元素
          createTextNode()   //创建一个文本节点
    （2）添加、移除、替换、插入
          appendChild()
          removeChild()
          replaceChild()
          insertBefore()
    （3）查找
          getElementsByTagName()    //通过标签名称
          getElementsByName()    //通过元素的Name属性的值
          getElementById()    //通过元素Id，唯一性

#### 3、事件——怎样使用事件以及IE和DOM事件模型之间存在哪些主要差别。

    （1）冒泡型事件：事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。
      IE 5.5: div -> body -> document
      IE 6.0: div -> body -> html -> document
      Mozilla 1.0: div -> body -> html -> document -> window
    （2）捕获型事件(event capturing)：事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，不过必须由开发人员特别指定)。
    （3）DOM事件流：同时支持两种事件模型：捕获型事件和冒泡型事件，但是，捕获型事件先发生。两种事件流会触及DOM中的所有对象，从document对象开始，也在document对象结束。
      DOM事件模型最独特的性质是，文本节点也触发事件(在IE中不会)。

4、XMLHttpRequest——这是什么、怎样完整地执行一次GET请求、怎样检测错误。

    XMLHttpRequest 对象提供了在网页加载后与服务器进行通信的方法。
    <script type="text/javascript">
        varxmlhttp;
        functionloadXMLDoc(url){
            xmlhttp=null;
            if(window.XMLHttpRequest){    //code for all new browsers
                xmlhttp=newXMLHttpRequest();
            }elseif(window.ActiveXObject){    //code for IE5 and IE6
                xmlhttp=newActiveXObject("Microsoft.XMLHTTP");
            }
            if(xmlhttp!=null){
                xmlhttp.onreadystatechange=state_Change;
                   xmlhttp.open("GET",url,true);
                xmlhttp.send(null);
            }else{
                alert("Your browser does not support XMLHTTP.");
            }
    }
    
    functionstate_Change(){
        if(xmlhttp.readyState==4){    //4 = "loaded"
            if(xmlhttp.status==200){    //200 = OK
                //...our code here...
            }else{
                alert("Problem retrieving XML data");
            }
        }
    }
    </script>

#### 5、严格模式与混杂模式——如何触发这两种模式，区分它们有何意义。
    在标准模式中，浏览器根据规范呈现页面；
    在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。
    浏览器根据DOCTYPE是否存在以及使用的哪种DTD来选择要使用的呈现方法。如果XHTML文档包含形式完整的DOCTYPE，那么它一般以标准模式
    呈现。对于HTML 
    4.01文档，包含严格DTD的DOCTYPE常常导致页面以标准模式呈现。包含过渡DTD和URI的DOCTYPE也导致页面以标准模式呈现，但是有过
    渡DTD而没有URI会导致页面以混杂模式呈现。DOCTYPE不存在或形式不正确会导致HTML和XHTML文档以混杂模式呈现。

#### 6、盒模型——外边距、内边距和边框之间的关系，IE 8以下版本的浏览器中的盒模型有什么不同。
    
    一个元素盒模型的层次从内到外分别为：内边距、边框和外边距
    IE8以下浏览器的盒模型中定义的元素的宽高不包括内边距和边框

#### 7、块级元素与行内元素——怎么用CSS控制它们、它们怎样影响周围的元素以及你觉得应该如何定义它们的样式。
    块级元素，用CSS中的display:inline;属性则变为行内元素
    行内元素，用CSS中的display:block;属性则变为块级元素
    影响：周围元素显示在同一行或换行显示，根据具体情况调整样式

#### 8、浮动元素——怎么使用它们、它们有什么问题以及怎么解决这些问题。
    需要浮动的元素可使用CSS中float属性来定义元素的浮动位置，left：往左浮动，right：往右浮动
    浮动元素引起的问题：
    （1）父元素的高度无法被撑开，影响与父元素同级的元素
    （2）与浮动元素同级的非浮动元素会跟随其后
    （3）若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
    解决方法：
    使用CSS中的clear:both;属性来清除元素的浮动可解决2、3问题，对于问题1，添加如下样式，给父元素添加clearfix样式：
    .clearfix:after{content: ".";display: block;height: 0;clear: both;visibility: hidden;}
    .clearfix{display: inline-block;}  /* for IE/Mac */

#### 9、HTML与XHTML——二者有什么区别，你觉得应该使用哪一个并说出理由。
    主要区别：
         XHTML 元素必须被正确地嵌套
         XHTML 元素必须被关闭，空标签也必须被关闭，如 <br> 必须写成 <br />
         XHTML 标签名必须用小写字母
         XHTML 文档必须拥有根元素
         XHTML 文档要求给所有属性赋一个值
         XHTML 要求所有的属性必须用引号""括起来
         XHTML 文档需要把所有 < 、>、& 等特殊符号用编码表示
         XHTML 文档不要在注释内容中使“--”
         XHTML 图片必须有说明文字
         XHTML 文档中用id属性代替name属性

#### 10、JSON——它是什么、为什么应该使用它、到底该怎么使用它，说出实现细节来。
    JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。
    JSON建构于两种结构：
    “名称/值”对的集合（A collection of name/value 
    pairs）。不同的语言中，它被理解为对象（object），纪录（record），结构（struct），字典（dictionary），哈希表
    （hash table），有键列表（keyed list），或者关联数组 （associative array）。 
    值的有序列表（An ordered list of values）。在大部分语言中，它被理解为数组（array）。