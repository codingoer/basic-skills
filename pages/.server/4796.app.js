"use strict";
exports.id = 4796;
exports.ids = [4796];
exports.modules = {

/***/ 34098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-0d74c30f",
  "path": "/database/redis/halou.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Spring部分",
      "slug": "spring部分",
      "children": []
    },
    {
      "level": 2,
      "title": "Java集合",
      "slug": "java集合",
      "children": []
    },
    {
      "level": 2,
      "title": "类加载",
      "slug": "类加载",
      "children": []
    }
  ],
  "filePathRelative": "database/redis/halou.md",
  "git": {
    "updatedTime": 1639064924000,
    "contributors": [
      {
        "name": "codingoer",
        "email": "codingoer@163.com",
        "commits": 1
      }
    ]
  }
}


/***/ }),

/***/ 69304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ halou_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./.temp/pages/database/redis/halou.html.vue?vue&type=template&id=a5af0918

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>哈喽二面准备</p><p>1.jvm为什么需要分代回收机制？</p><p>它的核心思想是根据对象存活的生命周期将内存划分为若干个不同的区域。一般情况下将堆区划分为老年代（Tenured Generation）和新生代（Young Generation），老年代的特点是每次垃圾收集时只有少量对象需要被回收，而新生代的特点是每次垃圾回收时都有大量的对象需要被回收</p><p>所有新生成的对象首先都是放在年轻代的。年轻代的目标就是尽可能快速的收集掉那些生命周期短的对象。年轻代分三个区。一个Eden区，两个 Survivor区(一般而言)</p><p>https://blog.csdn.net/weixin_38750084/article/details/83317028</p><p>2.自定义类加载器的实际应用有哪些 ？</p><p>https://www.zhihu.com/question/46719811?sort=created</p><p>实现热加载以及热部署。</p><p>3.mysql 索引的类型 ？</p><p>为什么是 B+tree 不是B-tree ？</p><p>hash在哪些场景下用？</p><p>4.覆盖索引有了解过嘛 ？怎么实现的 ？是否需要回表？</p><p>https://www.cnblogs.com/happyflyingpig/p/7662881.html</p><p>5.Redis 底层的selector 模型怎么实现的 ？</p><p>6.CPU怎么调度线程的？中断机制是啥 ？--这个问了我</p><p>7.Redis 集群的类型有哪些 ？各有什么优缺点？</p><p>8.微博大V 发布文章（一亿的粉丝），粉丝的文章列表怎么设计 ？</p><p>9.锁升级过程 ？</p><p>https://www.cnblogs.com/wangwudi/p/12302668.html</p><p>https://www.zhihu.com/question/57794716/answer/606126905</p><p>https://www.cnblogs.com/myseries/p/12213997.html</p><hr><ul><li><p>DDD领域驱动模型设计：</p></li><li><p>CMS垃圾收集器：</p></li></ul><p>CMS是老年代垃圾收集器，在收集过程中可以与用户线程并发操作。它可以与Serial收集器和Parallel New收集器搭配使用。</p><p>https://www.jianshu.com/p/86e358afdf17</p><ul><li>双亲委派</li></ul><p>https://www.jianshu.com/p/1e4011617650</p><p>https://blog.csdn.net/codeyanbao/article/details/82875064</p><p>https://blog.csdn.net/m0_38075425/article/details/81627349</p><ul><li>类加载器</li></ul><p>https://blog.csdn.net/m0_38075425/article/details/81627349</p><ul><li>线程池相关</li></ul><p>https://www.cnblogs.com/zz-ksw/p/12831249.html</p><p>线程池拒绝策略什么时候执行</p><p>线程池参数</p><ul><li><p>MYSQL EXPLAIN执行计划</p></li><li><p>MYSQL 不走索引</p></li><li><p>主键索引和唯一索引的区别</p></li><li><p>索引原理B树</p></li><li><p>MySQL索引类型</p></li><li><p>MySQL InnoDB区别</p></li></ul><p>https://www.zhihu.com/question/20596402</p><ul><li>MYSQL事务</li></ul><p>https://www.cnblogs.com/kismetv/p/10331633.html</p><ul><li>profoBuf的优缺点</li></ul><p>http://qiusuoge.com/16816.html</p><ul><li><p>zk的CAP规则？</p></li><li><p>spring加载bean的过程？</p></li><li><p>spring是如何装载bean的？</p></li><li><p>springBoot启动流程</p></li><li><p>接口幂等性如何处理</p></li><li><p>RocketMQ解决幂等性的问题</p></li></ul><p>https://www.cnblogs.com/chx9832/p/12325871.html</p><ul><li><p>Runable和Thread</p></li><li><p>synchronized</p></li></ul><p>https://www.cnblogs.com/weibanggang/p/9470718.html</p><ul><li>HashMap如何做到线程安全</li></ul><p>https://www.cnblogs.com/shijianchuzhenzhi/p/12904282.html</p><ul><li>ConcurrentHashMap</li></ul><p>https://www.jianshu.com/p/78989cd553b4</p><p>录音：</p><h2 id="spring部分" tabindex="-1"><a class="header-anchor" href="#spring部分" aria-hidden="true">#</a> Spring部分</h2><ul><li><p>bean的声明周期</p></li><li><p>bean的初始化流程</p></li><li><p>springBoot的start的是什么？</p></li><li><p>spring的start是怎么加载到Spring的容器当中的。自动装载？？PON中引入依赖就可以了怎么做的</p></li><li><p>SpringBoot启动类的三个注解？</p></li><li><p>@Configuration支持不同场景的配置？ConditionOnClass</p></li></ul><p>SpringBoot的条件注入。。。</p><h2 id="java集合" tabindex="-1"><a class="header-anchor" href="#java集合" aria-hidden="true">#</a> Java集合</h2><p>jdk1.8</p><p>HashMap的线程不安全体现在哪里？</p><p>hashmap多线程问题？</p><p>hashMap扩容机制？</p><p>链表变成红黑树的机制？？？两个条件：长度是8 + 长度大于64</p><p>通过key怎么计算是放到数组和链表？</p><p>hashMap初始容量是16，扩容16？扩容机制？：数组+链表+红黑树的迁移策略都不一样。</p><p>hashMap的扩容干了什么？</p><h2 id="类加载" tabindex="-1"><a class="header-anchor" href="#类加载" aria-hidden="true">#</a> 类加载</h2><p>加载，验证，初始化</p><p>类加载先被哪个类加载？？？？</p><p>GC垃圾回收器</p><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./.temp/pages/database/redis/halou.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const halou_html = (__exports__);

/***/ }),

/***/ 83744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

};
;
//# sourceMappingURL=4796.app.js.map