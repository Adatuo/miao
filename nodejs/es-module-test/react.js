//导入其他模块的默认导出
//import lodash from "./lodash";
//导出其他模块具名导出
//import { chunk,compact } from "./lodash";
//也可以在一句话中完成默认导出与具名导出
import lodash,{chunk,VERSION} from "./lodash.js";//import相当于是const了是唯一的
import confetti from "./confetti.js";
//也可以导出同时也导入

//把所有具名和匿名作为lodashMod一起调用
lodashMod = await import('https://esm.sh/lodash')//可以直接在控制台这样写
import * as lodashMod from 'https://esm.sh/lodash'

lodash()
chunk()
console.log(VERSION);
confetti()

