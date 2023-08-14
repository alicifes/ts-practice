/*
 * @Author: chenyuxiang
 * @Date: 2023-07-11 10:29:31
 * @LastEditTime: 2023-07-11 10:29:31
 * @LastEditors: chenyuxiang
 * @Description: 函数的重载
 */

//能不用就不用
function createData(a: number): Date;
function createData(a: number, b: number): string;

function createData(a: number, b?: number) {
  if (b) {
    return "string";
  } else {
    return new Date();
  }
}
//重载是更具项目的复杂度来进行实现的
//如果要使用this的话 最好是用call来操作的
interface Person007 {
    name: string;
}

function fn(this: Person007, a: number) {
  return this.name;
}

const f: Person007 & typeof fn

//call apply bind
//apply 第二个数是参数 bind的话需要再执行一下
//其实bind本质上是对科里化的应用
