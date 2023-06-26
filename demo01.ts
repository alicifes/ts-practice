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
type Person = { name: string; age: number,newC:FuncWithThis };
//在使用this的时候，需要指定this的类型
type FuncWithThis = (this: Person, name: string) => void;

const newC:FuncWithThis = function() {
    console.log(this.name);
}

const frank:Person = {
    name:'frank',
    age:18,
    newC:newC,
}
//函数在使用this的时候，需要将this传入，类似于 x.this之类的,或者使用call方法来进行调用
frank.newC('lal')
newC.call(frank,'lalal') //这个和以上的类似
