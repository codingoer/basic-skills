//import {HopeThemeSidebarConfig } from "vuepress-theme-hope";
module.exports = [
    {
        text: 'Programing Base',
        children: [
            {text:'Java概述', link:'/java/programing/overview.md'},
            {text:'环境变量与搭建', link:'/java/programing/environment.md'},
            {text:'数据类型', link:'/java/programing/data-type.md'},
            {text:'二进制与字符编码', link:'/java/programing/binary-and-coding.md'},
            {text:'Java中的运算符', link: '/java/programing/operation'},
            {text:'Java中的流程控制', link:'/java/programing/flow-control'},
            {link:'/java/programing/input-and-output', text:'输入与输出'},
            {link:'/java/programing/array', text:'数组'},
            {link:'/java/programing/string', text:'字符串'},
            {link:'/java/programing/function-call', text:'理解函数调用'},
            {link:'/java/programing/keyword', text:'Java中的关键字'},
            {link:'/java/programing/syntactic-sugar', text:'Java中的语法糖'}
        ]
    }
]