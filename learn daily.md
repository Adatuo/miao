# learn daily for JS

2024-7-3

函数运行的逻辑

知道了公式的求根

数组

条件里无穷大，infinity

以及，23点散步回来后似乎只能干最熟悉的事情

2024-7-5
副作用函数
纯函数，传入相同的参数总是返回相同的值
最好给函数起一个清晰的名字，后面可以重复利用

2024-7-8
2 in [1,1,1]  true 数组判断下标
21:26? 都是指向同一个元素，无论通过哪一个指向修改值，数组都会变
21:54? 修改元素实际上就是在修改指向，之前那个指向在不在没有意义
typeof null 返回object



2024-7-10
对象是值的聚名集合
2024.7.9  对象的属性 

1 in [1] false
---
push

//排序  mergeSortedArray
  nums1.sort(
    function(a,b){
      return a - b
      }
    )
//删除0,从前面删除会改变顺序，从后面开始删除  mergeSortedArray
  for (let p = nums1.length - 1; p >= 0 ; p--) {
    if (nums1[p] == 0) {
      nums1.splice(p,1)
 
    }
  }    

2024-7-12
  NaN == NaN fals
  21:07 21:12 21:53
  包装对象：一个真实的对象包装了一个原始类型
  原生对象/原始对象：直接书写的对象：“abc”

2024-7-13

//手搓concat,链接两组数，返回数组
  function concat(){
  //返回的新数组
  var result = []
  //arguments,不知道输入多少个就用这个
    for (let i = 0; i < arguments.length; i++) {
      //获得函数里面的每一个值
      var arg = arguments[i];
      //如果是数组那就遍历数字然后相加
      if (Array.array(arg)) {
        for (let j = 0; j < arg.length; j++) {
          result.push(arg[p])  
        }
      }else{
        result.push(arg)
      }
    }
    return result
}

//类数组对象 array-like object
obj = {
  length: 3,
  0: 2342,
  1: "oiwefj",
  2: false,
}


//深对比isEqual(具体内容和结构以及地址)，浅对比a===b（存储地址）

//
function foo(a, b, ...args /* 剩余参数, rest parameter, 它只能出现一个,只能出现在最后 */){
  console.log(arguments)
  console.log(a, b, args)  
}

foo(1,2,3,4,5,6,7) 返回数字和类数组对象
      1 2 [
          3,
          4,
          5,
          6,
          7
      ]

//数组排序
数组每个位置有大小，内存只要知道下标每个位置读取的时间是一样的

21：22，数组空间排序原理，内存就是这样工作的
连续空间存储。不够产生一个新空间，然后把数据拿过来。
a[23123123] = 1 不会建立这么大的空间会变为对象

c/c++/java的原始数组都是连续空间存储的
但js中的数组是特殊的对象，它的存储形式跟对象类似，但其背后肯定有连续形式存储的数组
(实际上会根据使用方式动态选择是连续存储还是对象形式存储)

//算法复杂度:
算法复杂度是分析一个算法/一段程序运行所需的时间和空间(内存)的

//时间复杂度
如何衡量程序运行的时间?
将程序运行时扫执行的所有操作的时间加起来，就是程序的总时间
实际是计算机在执行不同的原子操作的时候（如赋值、加法、乘法等）时，时间是不一样的，但是每种原子操作所花的时间是固定的，不随操作数的变化而变化
所以只要是固定时间的原子操作，我们不去纠结具体是多少时间，都统一算做一个时间单位。

但是字符串的拼接算作一个时间单位

所以
var a = 1    1
var b = 2*3 + a*a - 5    5
"fowiejfowiejf”+"oifiejfoiwejf"   1

一个算法所花时间除了程序本身，往往还取决于程序的输入。所以程序的时间复杂度往往是与输入有关的

21：53 时间复杂度的计算

有函数调用时，要看函数内部是怎么写的，包括系统自带函数

如果一个程序的运算时间最终计算出为100*n*n + 5*n + 1050 =O(*n)
如果存在一个常数c以及一个ne，让c*T(n)在n0之后始终大于F(n)则可以说F(n) =O(T(n))


粗略估算忽略无关紧要的常数，在函数图形上，O(斜线)一定会在（公式）曲线上面


//空间复杂度
空间复杂度是程序在运算过程中占用空间最多的时刻(最多同时占用的空间总数),不包括输入数据所占用的空间。
(空间与时间不一样，时间一定是累计的，但空间用过还可以清空后重复使用)即程序能够挪腾得开的情况下所需要的最小空间。

空间是不累计的，用过，清除再使用是不重复计算的。每个变量占用一个空间单位。

数组占用的空间单位数量为数组的长度

对象占用的空间是对象中属性的个教
///空间复杂度举例
function reverseArrayInPlace(array) {
var stop = Math.trunc(array.length / 2)
for (let i = 0; i < stop; i++) {
  var j = array.lrngth - i -1
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
return array
}

这个函数中的变量：
   ⦁ stop: 一个整数变量
   ⦁ i: 循环计数器，整数
   ⦁ j: 另一个整数变量
   ⦁ temp: 用于交换的临时变量

为什么不是 O(4)：
   ⦁ 虽然函数确实使用了 4 个额外的变量，但在大 O 表示法中，我们忽略常数。
   ⦁ O(4) 和 O(1) 在渐进分析中是等价的，因为它们都表示一个常数量的额外空间。
   ⦁ 大 O 表示法关注的是增长率，而不是精确的空间使用量。   

无论输入数组有多大，这个函数始终只使用这几个额外的变量。空间使用不会随着数组大小的增加而增加。   

2024-7-14
整数表示
20:24   想加算减 周期，通过只计算加法实现电路更简单

钟 T - 1 == T + 11

20:38 100 - 9怎么来的

//位运算
数值的二进制状态直接运算
按位与&
按位或|
按位异或^(相同为0不同为1)
按位非~ 一元运算，按位取反
移位运算
  左移 <<
  右移 >> 左边补符号位，即符号位（±）为啥就补啥
  无符号右移 >>>
    这个运算的结果一定是当正数理解的，忽略符号位

js中位运算的一些规则:
  只使用整数部分参与位运算

有用的效果:
X | 0 = X 跟0按位或不变
X & 1 = X 跟1按位与不变
X ^ X = 0 任何数跟自己异或都为0
右移相当于减半取整
左移相当于加倍

位运算非常快，快过加法


//浮点数表示
20：18 -1023-1024
20:20 浮点数在计算机中的表示
20：31 浮点数手动转换
浮点数的表示(IEEE754标准)
  JS语言里的数值其实都是有IEEE754标准存储的浮点数
    但是js中的数值在参与位运算时会保留这个数的整数部分的低32位来参与运算
  IEEE754标准中能够存储的最大精确整数为:
    2**53 - 1 大约等于  9后面15个零(书本第一章)
    即当底数部分的所有位都用来表示整数时,52 + 1位
  IEEE754中有正负零,即零有两种表示方式
  实际上NaN以及正负无穷大在IEEE754中也有相应的表示方式
    指数全1底数全0为正无穷
    符号位为1则为负无穷
    NaN也有相应的表示(略)
    虽然IEEE754中有定义这些特殊的数,但不是每种语言中都有这几个特殊数
  为什么不在底数放前指数放后?
    为什么指数部分不使用补码来存(即整数的表示)?
      为了能够从前往后按位扫描就能够区分两个浮点数的大小
        具体来说,即除符号位以外,谁先遇到1谁就更大
          可以更快的知道哪个数更大.
    为什么浮点数比大小这么重要?
      因为IEEE754不能精确表示任何一个十进制浮点数
        所以我们很少对比两个浮点数的相等性
        而是比较大小,或者是比较距离(a-b<0.0001)
      计算结果理论上相同的两个浮点数极有可能因为计算路径的不同而不一样
  为什么不存底数部分中的那个整数?
    因为那个数总是1,总是不变,就不用存了
  实际上的有效数字的数量为53位
    如果全用来存整数,则最大可以表示2**53-1,所以在这个之内的整数及其运算都是精确的
    但如果有小数部分,则整数部分就不能表示那么多了
    这意味着如果整数部分越多,则小数部分越少,那么精度就越小
      (精度说的总是小数部分,因为整数部分总是精确的(在2**53-1范围内时))
    也就是说数越大,小数部分精度就越小
    但如果全部用来表示小数,则精度可以很高
    总的来说,数越小,小数部分越精确,数越大,小数部分越不精确
  存储为的二进制状态转换为十进制时实际可以精确到小数点后53位甚至更多,但为什么只显示十几位?
    因为50几位的二进制表示的状态也就跟十几位十进制表示的状态数量差不多
    所以双精度浮点数在写成十进制时,最多也就只有十六七位的有效数字




字符串的表示
  ascii:是为每个字母,数字等英文符号指派了一个编号,一共255个符号.
  保存ascii范围内的字符,好说,直接就是这些数的二进制,一个字符占一个字节
  unicode:是为全球每个国家的每种语言的每个字符指派了一个编号
  如何保存unicode中的每个字符?
  不能直接把每个字符的编号直接转成二进制存储吗?
    理论上能,但是unicode由于编号范围太大,所以字符的编号跨度也大,a是97,"某个字符"可能是375434
    很明显的是除英文字符以外的其它的字符一个字节是不够存的
    所以要想存unicode内的所有字符,每个字符占一个字节肯定是不够的
      那每个字符占两个字节够不够?
        两个字节可以表示65536种不同的状态,显然也是小于全世界所有语言所有符号的数量的.
      那三个字节行不行?
        三节字节可以表示1670w种不同的状态,目前来说是铁定够了的.
    所以能不能每个字符就占固定的三个字节来存储呢?
      能.
    但是这样做有没有什么问题?
      有问题
      当我存的都是编号较小的字符时,空间就有浪费
      因为每个字符的编号根本就占不到三个字节.
    所以我们期望每个字符占用的字节数量是不确定的,字符号编号越大,字占的空间越多,字符编号越小,占用的空间就越小
      即**变长编码**
    如何表示当前这个字占用几个字节?
      用第一节字节来表示
        理论上可行,但有点浪费
          很明显,多数的字就只占用1 到 3节字节,你用一个字节仅用来表示1到3这三个数,有点浪费.
      用前三个bit来表示字节数量
        可以
        但是,这样一来,这种编码方式就跟ascii不兼容了
          (即ascii范围的字符与ascii编码不一样)
        而我们希望我们的编码算法能够兼容ascii,即前256或者至少前128个符号是跟ascii一模一样的
        如果数据中丢了一字节或多字节,数据会乱掉
      用每个字节的第一个bit表示后续有无字节
    实际中是怎么表示的?
      用第一个字节的**前导1的个数(前导1的后面有一个0)**来表示这个字占多少个字节
        多字节符号后续的字节以10开头
      单字节字符以0开头(兼容ascii 128以内的字符)
        1.	单字节字符（0xxxxxxx）：
	          	对于单字节字符，最高位是 0，即字符编码在 0x00 到 0x7F 之间。这部分与 ASCII 兼容。
	      2.	多字节字符：
              对于多字节字符，首字节的前几个比特用于指示字符的长度，后续字节以 10 开头。
              双字节字符（110xxxxx 10xxxxxx）：
              第一字节的前两位是 110，表示这是一个双字节字符。
              第二字节的前两位是 10，表示这是一个后续字节。
        3.	假设我们要编码一个字符，其 Unicode 代码点是 U+263A（）：
            •	U+263A 的二进制表示为：0000 0010 0110 0011 1010
            •	根据 UTF-8 编码规则，需要三个字节来表示这个字符：
            •	首字节：1110xxxx（前三位是 1110，表示这是一个三字节字符）
            •	第二字节：10xxxxxx
            •	第三字节：10xxxxxx
          将 U+263A 分割为三个部分并填充：
            •	1110 0000
            •	10 100110
            •	10 001110
          结果是：1110 0010 1011 0001 1010，最终 UTF-8 编码为 E2 98 BA。      
      变长变码(连编码这个字符占几个字节的部分都是变长的)
      可以在丢失字节时,不打乱后续的字符(因为每个字符的后续字节必须10开头,不是10开头则说明是下一个字符了)
        (即,可以通过这个后续字节10开头来识别字节的丢失)
    以上就是UTF8编码
    需要注意UTF8与UNICODE不一样
    unicode是为字符指派编号
    utf8是对编号进行二进制的编码
    类似的还有utf16编码,每个单位是16bit,首个编码单元的前导1的个数表示这个字的编码单元数量
      (这里的编码单元对于utf8来就是1字节,对于utf16是两字节)
 11:06:33
要将小数 3.25 转换为二进制，并了解其在字符中的表示，需要进行以下步骤：

### 步骤 1：将整数部分转换为二进制
整数 3 转换为二进制如下：
- 3 ÷ 2 = 1 余 1
- 1 ÷ 2 = 0 余 1

从最后一个余数向上看，得到二进制数 11。

### 步骤 2：将小数部分转换为二进制
小数 0.25 转换为二进制如下：
- 0.25 × 2 = 0.5 → 整数部分为 0
- 0.5 × 2 = 1.0 → 整数部分为 1

所以，小数部分 0.25 的二进制表示为 0.01。

### 步骤 3：合并整数和小数部分的二进制表示
将 3 的二进制表示 11 和 0.25 的二进制表示 0.01 合并，得到 3.25 的二进制表示为 11.01。

### 字符表示
在计算机中，浮点数的二进制表示可以通过 IEEE 754 标准来表示。具体步骤如下：

#### 1. 正规化二进制表示
首先，将二进制表示 11.01 正规化为 1.101 × 2^1。

#### 2. 计算指数部分
根据 IEEE 754 标准，32 位浮点数有 8 位用于指数部分，用偏移量 127。计算 1 + 127 = 128，二进制为 10000000。

#### 3. 尾数部分
取小数点后的部分 101，填充至 23 位为 10100000000000000000000。

#### 4. 组合
- 符号位：0（表示正数）
- 指数部分：10000000
- 尾数部分：10100000000000000000000

组合后，3.25 的 32 位浮点数表示为 0 10000000 10100000000000000000000。

### 最终字符表示
将这个 32 位二进制串转换为十六进制，可以得到其字符表示：
- 二进制：0 10000000 10100000000000000000000
- 十六进制：0x40400000

综上，3.25 的二进制在字符中的表示为 0x40400000。

 11:06:35
### 指数的偏移量 (Bias) 解释

在IEEE 754浮点数标准中，指数部分存储的是一个带偏移量的值，以便能够表示正负指数。以下是详细解释和计算步骤：

#### 1. **偏移量的概念：**
指数的偏移量 (Bias) 是为了能在二进制表示中表示负数和正数。偏移量的值取决于指数部分的位数。

- **32位单精度浮点数:**
  - 指数部分占8位。
  - 偏移量: \( 2^{7} - 1 = 127 \)

- **64位双精度浮点数:**
  - 指数部分占11位。
  - 偏移量: \( 2^{10} - 1 = 1023 \)

#### 2. **如何计算实际指数：**
实际指数 (E) 是用来表示浮点数的次方数。存储在内存中的指数值 (E') 是实际指数加上偏移量。

公式如下：
\[ E' = E + \text{Bias} \]

- 对于单精度:
  - \( E = E' - 127 \)
- 对于双精度:
  - \( E = E' - 1023 \)

#### 3. **示例计算：**

以3.25为例，解释其转换过程：

- **二进制表示：**
  - 整数部分 (3): \( 3_{10} = 11_2 \)
  - 小数部分 (0.25): \( 0.25_{10} = 0.01_2 \)
  - 合并后，3.25 = \( 11.01_2 \)

- **标准化：**
  - 标准化二进制数: \( 11.01_2 = 1.101 \times 2^1 \)

- **指数计算：**
  - 实际指数 (E) = 1
  - 存储的指数值 (E'):
    - 对于单精度: \( E' = 1 + 127 = 128 \)
    - 对于双精度: \( E' = 1 + 1023 = 1024 \)

- **IEEE 754表示：**
  - 符号位: 0 (正数)
  - 指数部分:
    - 单精度: \( 10000000_2 \)
    - 双精度: \( 10000000000_2 \)
  - 尾数部分:
    - 尾数为二进制小数点后的部分，1.101 的尾数是 101

### 完整的浮点数表示：
- **32位单精度：**
  - \( 0 10000000 10100000000000000000000 \)

- **64位双精度：**
  - \( 0 10000000000 1010000000000000000000000000000000000000000000000000 \)

### 偏移量的作用：
在上述过程中，偏移量（Bias）的作用是将实际指数 (E) 转换为非负数的存储指数 (E')，以便在二进制系统中容易表示和处理。

### 总结
指数的偏移量是在二进制表示浮点数时用来处理正负指数的技术，通过增加一个固定的偏移量，使得所有的指数都变为非负数，这样可以在二进制系统中表示。32位和64位浮点数使用不同的偏移量以适应不同的指数位数。

7-17

# 箭头函数
[1,2,3,4].forEach(it =>{
  console.log(it)
})

# 高阶函数
## 定义：高阶函数是指接受一个或多个函数作为参数，或返回一个函数作为结果的函数。
### 当一个函数操作它函数时(不管是拿它们当参数，还是返回一个函数)
特点：

	1.	接受函数作为参数：高阶函数可以接收其他函数作为参数。
	2.	返回函数：高阶函数可以返回一个新的函数。

function add(a,b) {
  return a + b
}
## 多参数返回
function noisy(f) {
    /*第一个 return 语句返回的不是传入的参数，而是一个新函数。
  这个新函数会在调用时打印传入的参数并返回计算结果。*/
  return function (...args) {//搜集参数，都会返回数组
    console.log("call with",args);
    var val = f(...args)//返回参数，都会返回数组。等价于f.apply(null,args)
    console.log("call with",args,"- got",val);3,5 ,8
    return  val;
  }
}


let noisyAdd = noisy(add)
noisyAdd(3,5)

## 现有function forEach，接下来的高阶函数才有用
function forEach(array,doSomething) {
  for (let i = 0; i < array.length; i++) {
    doSomething(array[i],i,array)
  }
};
forEach([1,2,3,4],function(it,idx){
  console.log(it,idx);
})


#求导(f)
function 求导(f){
  return function(x){
var gap = 0.000000000001
var xl = x - gap
var x2= x + gap
var y1 = f(x1)
var y2= f(x2)
return (y2 - y1)/(x2 - x1) ≈ y2 - y1 = k(x2 - x1)
  }
}

# 闭包
[text](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)


7-19
# JOSN
配置文件 ini
yaml语法不一样
反引号 ` `里面可以打回车 

 不能有Tab

  json中不能有运算，但是js对象可以

  json中对象的属性名必须加【双引号】
  但js中的对象，属性有时可以不加引号，加也可以加单引号(不能用反引号)

  js中对象或数组最后一项的后面可以为了美观/对称/一致而多加一个额外的空格json中不行

  json中只有对象，数组，数值，字符串,，null没有NaN，没Infinity,
  但是有科学记数法

一个json文件的内容可以对应于一个类型的值以下均为合法的json文件
---
2
---
true
---
"owierjuowiefj"
---
[1,1,1,2,3,3, "oiwejf"]
---
{
"a":·1,
"b":·[2,3,{}]
}
---

为什么有这样的限制?
1.是为了让json格式更简单，则更容易解析
2.是为了让json格式能够适应于更多的语言(json中支持的值的类型几乎所有语言都支持)

## JSON.stringify JSON.parse
JSON.stringify 将 JavaScript 对象转换为 JSON 字符串。JSON.stringify(value[, replacer[, space]])

JSON.parse 将 JSON 字符串转换为 JavaScript 对象。JSON.parse(text[, reviver])


## trim()
对于josn特别有，用于去除一个字符串两端的空白字符和行终止符(中间的无法去除)。这个方法不会改变原始字符串，而是返回一个新的字符串。
---
去除的字符：
空格 (' ')
制表符 ('\t')
行终止符（包括 '\n'， '\r' 等）
---
let str2 = "\t\tJavaScript\t\nttt";
console.log(str2)
let trimmedStr2 = str2.trim();
console.log(trimmedStr2)//JavaScript

# slice()
用于从一个字符串或数组中提取一部分，并返回一个新的字符串或数组，而不改变原始字符串或数组。
// 对于字符串
let str = "Hello, World!";
let newStr = str.slice(0, 5);
console.log(newStr); // 输出 "Hello"

// 对于数组
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3);
console.log(newArr); // 输出 [2, 3]

# split()
用于将一个字符串分割成子字符串数组，并返回该数组。该方法不会改变原始字符串。
let str = "apple,banana,cherry";
let fruits = str.split(",");
console.log(fruits); // 输出 ["apple", "banana", "cherry"]

let str2 = "a-b-c-d";
let letters = str2.split("-", 3);
console.log(letters); // 输出 ["a", "b", "c"]

# filter
filter() 是 JavaScript 数组对象的一个方法，用于创建一个新数组，包含所有通过所提供函数实现的测试的元素。filter() 不会改变原数组，只会返回一个新的数组。
## 用法
let newArray = array.filter(function(element[, index[, array]]){},thisArg)
Array.filter(function(currentValue, indedx, arr), thisValue)
## 参数
function: 一个用来测试数组每个元素的函数。它接收三个参数：
  element: 当前处理的元素。
  index (可选): 当前处理元素的索引。
  array (可选): 调用 filter 的数组。

thisArg (可选): 执行回调时用作 this 的值。


# map
map 是 JavaScript 数组的一个内置方法，用于创建一个新数组，其结果是通过对数组中的每个元素调用提供的函数来实现的。map 不会改变原数组，而是返回一个新数组。
## 用法
const newArray = array.map(callback(element[, index[, array]])[, thisArg])
Array.filter(function(currentValue, indedx, arr), thisValue)
  callback：在数组每一项上执行的函数，接收三个参数：
  element：正在处理的当前元素。
  index（可选）：正在处理的当前元素的索引。
  array（可选）：调用 map 方法的数组。
  thisArg（可选）：执行回调函数时用作 this 的值。

# map与filter的不同
map 用于对数组的每个元素进行变换，返回一个新的数组，长度与原数组相同。
filter 用于筛选数组中的元素，返回一个新的数组，长度可能小于或等于原数组。

# reduce
reduce 是 JavaScript 中的一个数组方法，它用于将数组中的所有元素通过一个累加器函数逐步合并为单一的输出值。
## 用法
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
  callback：一个函数，用于对数组中的每个元素执行。
  accumulator：累加器，累积回调的返回值。
  currentValue：数组中正在处理的当前元素。
  currentIndex：数组中正在处理的当前元素的索引，从0开始。
  array：调用 reduce 的数组。
  initialValue：作为第一次调用 callback 函数时 accumulator 的初始值。如果未提供 initialValue，则使用数组中的第一个元素，并从第二个元素开始执行 callback 函数。
## 例子
[4,4,5,3,2,7,8,88,8].reduce((avg,it,i) => {
  return (avg * i + it) / (i + 1)
})
[2,3,5,7,11].reduce((obj,it,i) => {
  obj[it] = i
  return obj
},{})

7-20
# map、filter、filter结合
## 会占用更多内存
var avg = (avg,it,i) => (avg * i + it) / (i + 1)
ancestry
  .filter(it => it.sex == 'f')
  .map(it => it.died - it.born)
  .reduce(avg)
# bind
function add(a, b) {
  return a + b;
}

const addFive = add.bind(null, 5);
console.log(addFive(10)); // 输出: 15，因为 `a` 已经绑定为 5
## 总结
bind 方法在以下情况下特别有用：

  需要确保函数在某个特定对象的上下文中执行时。
  创建带有部分应用参数的函数（即柯里化函数）。
  为回调函数绑定 this。

优雅与效率二选一
bind 可以套娃绑定
21：32面试要问
22:25面试
时间复杂度 空间复杂度判断

7-21
21:10
every2 some2 predicate
Count Primes 22：04 22：06更快
MoveZero 思路不一样 22：13

8-1
21:15继承
21:50super()
22:20对象类型判断

8-2
21:10 递归二叉树
21:25 数组