/*
 * @Author: chenyuxiang
 * @Date: 2023-06-26 14:45:45
 * @LastEditTime: 2023-06-26 14:45:45
 * @LastEditors: chenyuxiang
 * @Description: ts 第二课
 */
type Test1 = { [k: number]: string };
//type Test2 =  Record<number:string>;

//enum 枚举,第一个是起始，后续+1
//构建映射关系
//推荐使用Number enum， js可以使用对象来实现替代
enum A {
    todo = 0,
    done,
    archived,
}

let statusOne:A = 0
let statusTwo:A = A.done
console.log(statusOne);

//用于权限控制
enum Permission{
    None = 0, // 0000
    read =  1<< 0, // 0001
    white = 1 << 1, // 0010
    admin = None | read | white
}

type User = {
    permission:Permission
}

const user:User = {
    permission:0b0010
}

//判断权限
if((user.permission & Permission.read) === Permission.read){
    //如果有读的权限.两个权限进行and操作
}

