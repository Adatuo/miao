type MyOmit<T, Keys extends keyof T> = {//object
  [prop in keyof T]: prop extends Keys ? never : T[prop];
}
type Person = {
  name: string;
  age: number;
  gender: string;
};

type PersonWithoutAge = MyOmit<Person, 'age'>;
// 等价于：{ name: string; gender: string; }

type EventName<T> = `${keyof T & string}Changed`;
/*keyof T：
keyof T 是 TypeScript 中的内置操作符，用于获取类型 T 的所有键名，返回的结果是这些键名的联合类型。
假设 T 是 { name: string; age: number }，那么 keyof T 生成的类型将是 'name' | 'age'。
& string：
keyof T & string 的作用是确保 keyof T 得到的键名是字符串类型。尽管大部分对象的键名通常都是字符串，但 TypeScript 允许键名为 symbol 或 number，所以这里加了 & string 来做类型约束。
这一步是为了确保后续的字符串拼接不会出错。*/

//Call Signatures
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
 
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description"; //函数本质是对象,所以可以动态添加属性
 
doSomething(myFunc);