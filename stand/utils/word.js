let wordData= [
  {
    question: "在文档上输出  'Hello World' 的正确 Javascript 语法是？",
    pic: "",
    items: [
      { value: "0", name: "('Hello World')", checked: false },
      { value: "0", name: "Hello World", checked: false },
      { value: "0", name: "response.write('Hello World')", checked: false },
      { value: "1", name: "document.write('Hello World')", checked: false }
    ],
    detail: "在文档上输出  'Hello World' 的正确 Javascript 语法是document.write('Hello World')"

  },
  {
    question: "AngularJS1中指定控制器的是哪个指令？",
    pic: "",
    items: [
      { value: "0", name: "ng-route", checked: false },
      { value: "0", name: "ng-template", checked: false },
      { value: "0", name: "ng-model", checked: false },
      { value: "1", name: "ng-controller", checked: false }
    ],
    detail: "ng-route  自带路由 , ng-template 寄存方式,  ng- model 指令绑定了 HTML 表单元素到 scope 变量中 ,ng- controller 指定控制器 "
  },
  {
    question: "执行以下程序段后，x的值是（ ）。",
    pic: "../../img/1.png",
    items: [
      { value: "0", name: "1", checked: false },
      { value: "0", name: "2", checked: false },
      { value: "1", name: "3", checked: false },
      { value: "0", name: "4", checked: false }
    ],
    detail: "switch中，对x+1,此时x为1，然后进入case 1 中，又执行++x，此时x变为2；由于case 1中没有break，然后继续执行 case 2，执行++x，所以x变成3 "

  },
  {
    question: "关于angularjs1说法，错误的是",
    pic: "",
    items: [
      { value: "0", name: "前端mvc，极大降低前端开发的耦合", checked: false },
      { value: "1", name: "极大的丰富了dom操作", checked: false },
      { value: "0", name: "实现了数据双向绑定", checked: false },
      { value: "0", name: "实现了依赖注入", checked: false }
    ],
    detail: "Angular大大减少了对DOM的访问。 jQuery极大的丰富了DOM操作"

  },
  {
    question: "白屏时间first paint 和可交互时间dom ready的关系是？",
    pic: "",
    items: [
      { value: "1", name: "先触发first paint，后触发dom ready", checked: false },
      { value: "0", name: "先触发dom ready，后触发first paint", checked: false },
      { value: "0", name: "一起触发", checked: false },
      { value: "0", name: "没关系", checked: false }
    ],
    detail: "页面的性能指标详解：白屏时间（first Paint Time）——用户从打开页面开始到页面开始有东西呈现为止; 首屏时间——用户浏览器首屏内所有内容都呈现出来所花费的时间 ;用户可操作时间(dom Interactive) ——用户可以进行正常的点击、输入等操作，默认可以统计domready时间，因为通常会在这时候绑定事件操作; 总下载时间——页面所有资源都加载完成并呈现出来所花的时间，即页面 onload 的时间 "
  },
  {
    question: "NOSCRIPT标签是做什么用的？",
    pic: "",
    items: [
      { value: "0", name: "制止脚本的运行", checked: false },
      { value: "0", name: "防止区域脚本被js修改<br>(例如aDiv.innerHTML = 'something' 将会不起作用)", checked: false },
      { value: "1", name: "用来定义在脚本未被执行时的替代内容", checked: false },
      { value: "0", name: "NOSCRIPT 标签并不存在", checked: false }
    ],
    detail: "NOSCRIPT标签用来定义在脚本未被执行时的替代内容。也可以用在检测浏览器是否支持脚本，若不支持脚本则可以显示NOSCRIPT标签里的innerText;noscript: 用以在不支持js的浏览器中显示替代的内容，这个元素可以包含能够出现在文档<body>中任何html元素，script元素除外。包含在noscript元素的内容只有在下列情况下才会显示出来1.浏览器不支持脚本2.浏览器支持脚本，但脚本被禁用"
  },
  {
    question: "在标准的 JavaScript 中， Ajax 异步执行调用基于下面哪一个机制才能实现？",
    pic: "",
    items: [
      { value: "1", name: "Event和callback", checked: false },
      { value: "0", name: "多线程操作", checked: false },
      { value: "0", name: "多CPU核", checked: false },
      { value: "0", name: "Deferral和promise", checked: false }
    ],
    detail: "在标准的 JavaScript 中， Ajax 异步执行调用基于Event和callback机制才能实现"

  },
  {
    question: "在ECMAScript6 中,promise的状态没有（）",
    pic: "",
    items: [
      { value: "0", name: "Pending", checked: false },
      { value: "1", name: "Pause", checked: false },
      { value: "0", name: "Resolved", checked: false },
      { value: "0", name: "Rejected", checked: false }
    ],
    detail: "Promise 对象代表一个异步操作，有3种状态：Pending(进行中)、Resolved(已完成，又称Fulfilled)和Rejected(已完成);一个promise的状态只可能从“等待”转到“完成”态或者“拒绝”态，不能逆向转换，同时“完成”态和“拒绝”态不能相互转换 ;promise必须实现then方法（可以说，then就是promise的核心），而且then必须返回一个promise，同一个promise的then可以调用多次，并且回调的执行顺序跟它们被定义时的顺序一致 ;then方法接受两个参数，第一个参数是成功时的回调，在promise由“等待”态转换到“完成”态时调用，另一个是失败时的回调，在promise由“等待”态转换到“拒绝”态时调用。同时，then可以接受另一个promise传入，也接受一个“类then”的对象或方法，即thenable对象。 "

  },
  {
    question: "下面哪一种不属于 js 的六种基本数据类型？（）",
    pic: "",
    items: [
      { value: "0", name: "undefined", checked: false },
      { value: "0", name: "string", checked: false },
      { value: "0", name: "null", checked: false },
      { value: "1", name: "Object", checked: false }
    ],
    detail: "ECMAScript 中有 5 中简单数据类型（也称为基本数据类型）： Undefined、Null、Boolean、Number 和 string。还有一种复杂数据类型——Object。"
  },
  {
    question: "以下js表达式返回false的是（）",
    pic: "",
    items: [
      { value: "0", name: "1==true", checked: false },
      { value: "0", name: "“”==false", checked: false },
      { value: "1", name: "false==null", checked: false },
      { value: "0", name: "null==undefined", checked: false }
    ],
    detail: "undefined和null与任何有意义的值比较返回的都是false，但是null与undefined之间互相比较返回的是true。"
  }


]


module.exports = {
  word:wordData
}