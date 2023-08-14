//as const

//const会把类型往小推导  let 会把类型往大推导
//ts 的const是常量，无法赋值无法修改 多用固定Array,无法push
let a = "b" as const; //类似于readonly

function f09(a: number, b: number) {
  return a + b;
}

function sum09(name:string, ...array:number[]){
    //类型不明确
    //f(...array)
    const a = [1,2] as const
    //传入必须为一个元祖类型
    f09(...a)
}

//结合析构语法来实现
type Config = {
    url:string;
    method:"get"|"post";
    data?:string;
    dataType?:"json"|"text"
}

function ajax009({url,method,...rest}:Config = {url:"xxx",method:"get"}) {
    //可以析构参数
    //如果还要继续对参数进行默认值赋值的话
    //void返回值 1.没有return 2.return undefined 3.return
}