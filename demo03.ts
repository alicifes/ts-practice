/*
 * @Author: chenyuxiang
 * @Date: 2023-06-28 15:02:51
 * @LastEditTime: 2023-06-28 15:02:51
 * @LastEditors: chenyuxiang
 * @Description:
 */

// type && interface
// type几乎什么时候都可以使用 alias别名

//type表示的是类型，并不是具体的值
type FalseLike = 0 | '' | null | undefined | false
type FnWithProp = {
    prop:string,
    (a:number,b:string): void //对象内部使用的是函数,这里不需要使用() => {}来声明
}

const lsa:FnWithProp = (a:number,b:string) => {
    return a+b
}
lsa.prop = 'sad'
//在react中使用较多。props来实现默认的定义

//interface 接口:面向对象oop 功能。函数。属性
//描述对象的属性 declare,以下两者等价
type A1 = Array<string>
interface A2 extends Array<string> {
}
//一般来说 type用来描述基本的数据类型7种,而对于其他的数据类型的话Array... 需要使用interface来实现
//interface只描述对象 type可以描述所有的数据    type其实只是别名 而interface是类型声明(真名)
//sp type不可以赋值 interface自动合并，可扩展
interface aaa extends Array<string> {
    sscc:'saw',
}