/*
 * @Author: chenyuxiang
 * @Date: 2023-07-03 14:32:05
 * @LastEditTime: 2023-07-03 14:32:05
 * @LastEditors: chenyuxiang
 * @Description: 类型兼容与赋值
 */

// 以下是一个反人类的js对象的过滤
// const config = { a: 1, b: 2, c: 3, d: 4 };
// const newConfig = lodash.pick(config, ["a", "b", "c"]);
// runTask(newConfig)

//小 =》 大 属性多的兼容属性小的  本质上属性多的限制条件也多
let user = {
    name:'1',
    age:18,
    id:1,
    email:'xxxx'
}

//类型反推，这里的typeof是ts的typeof
type User06 = typeof user

//接口都是子接口代替父接口 extends
//interface

//复杂的函数，包括参数的返回值，通过习惯来设计ts 少参数可以赋值给参数多的
//参数要求少的可以赋值给参数要求多的
//对于返回值来说，返回值集合小的可以赋值给集合大的， 返回值限制多的可以赋值给限制少的

//如果想要传递函数的话，使用参数要求更少的来传递给参数要求更多的，也可以在tsconfig中进行配置
// listerEvent('click',(e: MyMouseEvent) => console.log((e as MyMouseEvent))) //从而实现断言才能使用,这里使用确切的方法,
// MyMouseevet这里是子类型,实在不行还是可以使用any来实现
