/*
 * @Author: chenyuxiang
 * @Date: 2023-06-30 10:22:19
 * @LastEditTime: 2023-06-30 10:22:19
 * @LastEditors: chenyuxiang
 * @Description: 类型交叉 并集
 */

//两个类型取集
const t05 = (a: string & number) => {
  a;
};
// ts初始化的时候不能有多余的东西
// 两者一起合并
interface Color {
  name: string;
  color: string;
}

interface Circle05 {
  radius: number;
}

type ColorfulCircle05 = Color & Circle05;
//使用& 交集可以模拟继承
type Person = {
  name: string;
  age: string;
};
//两者之间会区交集
// type User05 = Person & {
//   id: number;
//   email: string;
// };
interface User05 extends ColorfulCircle05 {}

const u: User05 = {
  name: "12",
  id: 123,
  email: "asd",
};

//对外扩展使用接口，对内不需要扩展，使用type, interface 的拓展性较好
//tips 如果给一个对象声明type 但是并不是说该对象的type只有这一个，而是限定了该对象的属性
