/*
 * @Author: chenyuxiang
 * @Date: 2023-06-26 14:45:51
 * @LastEditTime: 2023-06-26 14:45:51
 * @LastEditors: chenyuxiang
 * @Description:
 */

//使用type来进行命名
type FnA = (a: number, b: number) => number;
const c: FnA = (a, b) => {
  return a + b;
};
console.log(c(1, 2));

//很搞笑的是，如果想使用this的话，反而是需要使用箭头函数来进行使用，但是调用的话还是需要使用Function
type Person = { name: string; age: number; newC: FuncWithThis };
//在使用this的时候，需要指定this的类型
type FuncWithThis = (this: Person, name: string) => void;

const newC: FuncWithThis = function () {
  console.log(this.name);
};

const frank: Person = {
  name: "frank",
  age: 18,
  newC: newC,
};
//函数在使用this的时候，需要将this传入，类似于 x.this之类的,或者使用call方法来进行调用
frank.newC("lal");
newC.call(frank, "lalal"); //这个和以上的类似

//综上所述，由于Function类型用来描述代码的话太不精确了，因此使用() => 来描述
//一些常用的类型
const newDate: Date = new Date();
const newMap: Map<string, number> = new Map();
newMap.set("sss", 2); //声明一个map
const wp: WeakMap<{ name: string }, number> = new WeakMap();
const setItem: Set<number> = new Set();
setItem.add(1231)

//如果要使用DOM
const button = document.getElementById('xxx')
const bigi:bigint = 100n //声明bigint
const symbolItem:Symbol = Symbol('ass') //使用symbol不需要使用nw

//unknown 类型被cover，不知道是什么数字 ，可以使用断言来进行操作 as
//any:什么都可以
//never 空集(用来做检查，使其显示和谐)
