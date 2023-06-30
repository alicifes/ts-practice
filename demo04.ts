/*
 * @Author: chenyuxiang
 * @Date: 2023-06-29 10:44:56
 * @LastEditTime: 2023-06-29 10:44:56
 * @LastEditors: chenyuxiang
 * @Description: 联合类型  => 类型收窄
 */

//ts类型计算:联合类型 当你使用联合类型的时候，如果你不区分使用的话会报错
type A4 = { name: string };
type B4 = { age: number };

type C4 = A4 | B4;
const c4: C4 = {
  name: "wpc",
};

const C41: C4 = {
  age: 19,
};

const c42: C4 = {
  name: "123",
  age: 20,
};
//以上三个可以联合使用
//错误的例子,这里使用会报错，需要对特定的类型进行区分
// const d4 = (a: number | string){
//     a.toFix(2)
// }
//类型收紧
const d4 = (a: number | string) => {
  if (typeof a === "number") {
    a.toFixed(2);
  } else {
    a.split(1, 2);
  }
};
//但是这里有一个js的历史遗留问题，typeof不能返回null ，因为typeof null = object || 而且typeof Date === ‘obj’无法区分
//因此这里使用Instanceof来进行区分,不支持基本类型
//不支持ts独有类型
const d5 = (a:Date | Date[]) => {

    if(a instanceof Date){
        a.toISOString()
    }else if(a instanceof Array){
        a[0].toISOString
    } else {
        Error
    }
}
//可以使用in来收窄类型 if('name' in xxxx){}

//is  TS专用
//ts中区分类型的方法 is  有点麻烦
type Rect = {
    height: number,
    width: number
}

type Circle = {
    center: [number, number],
    radius: number
}

const f1 = (a : Rect | Circle) => {
    if(isRect(a)){
        a
    }
}
//1.这个地方一定要限定 is Rect 从而得到这个返回值
function isRect (x:Rect | Circle ): x is Rect {
    return 'height' in x && 'width' in x
}
//2. a.kind来进行区分o
type Center = {kind:'center',center:[number,number]}
type Square = {kind:'square',sideLength:number}
//如果有基本类型直接使用typeof 进行过滤 ,加上一个共有的字段
//这里的kind必须是简单类型，并且各个类型中的kind没有交集
const f2 = (a:Center| Square) => {
    if(a.kind === 'center'){
        a
    }
    if(a.kind === 'square'){
        a
    }
}
//4.使用断言进行强制性的收缩 as
//所有类型的联合是 unknown 因为是对类型的未知，因此需要对该类型进行收缩才能使用
//any 什么都能用但是不能给never
//const n2:never = any
