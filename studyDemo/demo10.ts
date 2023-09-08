/**
 * 泛型
 * 函数的本质是推后执行 的部分待定 的代码
 * 泛型是用来计算的类型，接受什么返回什么
 * 当一种语言的类型系统发展到一定时候，泛型就是必须的产物
 */

type F<A, B> = A | B;
type Result = F<string, number>; //函数调用1

type F1<T> = T
type Result1 = F1<string>; //函数调用2
//调试的话可以参考直接带入带类型的函数

//在ts中使用extends来进行泛型的约束
// T extends String 意味着T必须是String的子类型
//在此处extends 可以理解为继承或者包含于，但是继承只有在面向对象的语法中才有意义
