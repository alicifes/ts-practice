/*
 * @Author: chenyuxiang
 * @Date: 2023-07-10 14:36:28
 * @LastEditTime: 2023-07-10 14:36:28
 * @LastEditors: chenyuxiang
 * @Description: 深入对象 & 函数语法
 */

//索引签名,这里就可以添加新的key
type Hash07 = { [k: string]: unknown; length: string };

//映射类型,无法添加新的key，多用于泛型
type Hash107 = {
  [k in string]: unknown;
};

//?可选属性
//? 表示可以传也可以不传
interface Hash207 {
  curItem?: unknown;
  onChange: () => void;
}

interface Person07 {
  name: string;
  age?: number;
}

//readonly 只读，不能修改,保证属性不可写
interface User07 {
  readonly id: string;
  readonly name: string;
}

//深入函数
interface F07 {
  (a: number, b: number): number;
  count?: number;
}

const f: F07 = (a, b) => {
  return a + b;
};
f.count = 1

const f07 = function(a:number) {
    return a + 1
}
//先写类型再赋值(优先)

//构造函数 类型谓词  instanceof
//一个类型的判断
type Person007 = {
    name:string
}
type Animal007 = {}

function isPerson(x:Person007 | Animal007): x is Person007{
    return 'name' in x
}

function f007 (a:Person007| Animal007) {
    if(isPerson(a)){
        a
    }
}

type A007 = (x:Person007 | Animal007) => x is Person007
//如果要进行类型收窄的话，这里需要赋值 返回值为  x is Person007; 但是这里的数据是对不上的
//两边一个是 x is Person007 一个是 boolean
//const isPerson002:A007 = (x) => 'name' in x
const isPerson002 = (x: Person007 | Animal007): x is Person007=> 'name' in x

