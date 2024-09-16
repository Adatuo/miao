7.17
高阶函数  
不能返回if
function forEach(array,doSomething) {
  for (let i = 0; i < array.length; i++) {
    doSomething(array[i],i,array)
  }
};
forEach([1,2,3,4],function(it,idx){
  console.log(it,idx);
})
[1,2,3,4].forEach(function(it,idx){
  console.log(it,idx);
})


箭头函数
[1,2,3,4].forEach(it =>{
  console.log(it)
})
箭头函数的形态
var square = (x) =>{
  return x * x
}
var square = x =>{
  return x * x
}
var square = x => x * x

function add(a,b) {
  return a + b
}
function noisy(f) {
  /*第一个 return 语句返回的不是传入的参数,而是一个新函数.
  这个新函数会在调用时打印传入的参数并返回计算结果.*/
  return function (...args) {//搜集参数,都会返回数组
    console.log("call with",args);
    var val = f(...args)//返回参数,都会返回数组
    console.log("call with",args,"- got",val);3,5 ,8
    return  val;
  }
}


let noisyAdd = noisy(add)
noisyAdd(3,5)

function map(array,){
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(transfor(array[i],i,arry))
    
  }
  return result
}
  
filter
filter() 
方法用于创建一个新数组,包含通过提供的函数测试的所有元素.
换句话说,它会遍历数组中的每个元素,使用一个回调函数对其进行测试,返回true的元素会保留在新数组中
let numbers = [1, 2, 3, 4, 5, 6];

// 筛选出所有大于 3 的数字
let filteredNumbers = numbers.filter(function(number) {
  return number > 3;
});

console.log(filteredNumbers); // 输出: [4, 5, 6] 是在回调函数中返回的,number不会改变


forEach() 
它会对数组中的每个元素执行一次提供的函数
与其他迭代方法不同forEach不会返回一个新数组,而是对数组中的每个元素执行指定的回调函数
遍历数组:forEach最常用于遍历数组并对每个元素执行某种操作
执行副作用:常用于需要副作用的场景,如更新DOM记录日志等
//let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index, arr) {
  arr[index] = number * 2;
});

console.log(numbers); // 输出: [2, 4, 6, 8, 10]

map()
//let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(number) {
  return number * 2;
});
characterClasses.map(function(item) {
  return drawCharacterGraph(item);  // 隐式传递了当前元素作为参数
});
//let graphs = node.elements.map(drawGraph)

console.log(doubled); // 输出: [2, 4, 6, 8, 10]


reduce
它用于将数组中的所有元素通过一个累加函数累积成一个单一的值.它可以用于求和,求积,计算平均值,转换数据结构等各种操作
//let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {//(当前值,累加值)
  return accumulator + currentValue;
}, 0);

let sum2 = numbers.reduce((accumulator, currentValue) => (accumulator + currentValue),0);

console.log(sum); // 输出: 15


配置文件
var ini = 
`
7-19用的时候删除这一行
[General]
Name=未命名

[Output]
Mode=Simple
FilenameFormatting=%CCYY-%MM-%DD %hh-%mm-%ss
DelayEnable=false
DelaySec=20
DelayPreserve=true
Reconnect=true
RetryDelay=2
MaxRetries=25
BindIP=default
IPFamily=IPv4+IPv6
NewSocketLoopEnable=false
LowLatencyEnable=false

[Stream1]
IgnoreRecommended=false
EnableMultitrackVideo=false
MultitrackVideoMaximumAggregateBitrateAuto=true
MultitrackVideoMaximumVideoTracksAuto=true

[SimpleOutput]
FilePath=C:\\Users\\ASUS\\Videos
RecFormat2=mkv
VBitrate=2500
ABitrate=160
UseAdvanced=false
Preset=veryfast
NVENCPreset2=p5
RecQuality=Stream
RecRB=false
RecRBTime=20
RecRBSize=512
RecRBPrefix=Replay
StreamAudioEncoder=aac
RecAudioEncoder=aac
RecTracks=1
StreamEncoder=nvenc
RecEncoder=nvenc

[AdvOut]
ApplyServiceSettings=true
UseRescale=false
TrackIndex=1
VodTrackIndex=2
Encoder=obs_x264
RecType=Standard
RecFilePath=C:\\Users\\ASUS\\Videos
RecFormat2=mkv
RecUseRescale=false
RecTracks=1
RecEncoder=none
FLVTrack=1
StreamMultiTrackAudioMixes=1
FFOutputToFile=true
FFFilePath=C:\\Users\\ASUS\\Videos
FFExtension=mp4
FFVBitrate=2500
FFVGOPSize=250
FFUseRescale=false
FFIgnoreCompat=false
FFABitrate=160
FFAudioMixes=1
Track1Bitrate=160
Track2Bitrate=160
Track3Bitrate=160
Track4Bitrate=160
Track5Bitrate=160
Track6Bitrate=160
RecSplitFileTime=15
RecSplitFileSize=2048
RecRB=false
RecRBTime=20
RecRBSize=512
AudioEncoder=CoreAudio_AAC
RecAudioEncoder=CoreAudio_AAC

[Video]
BaseCX=1920
BaseCY=1080
OutputCX=1280
OutputCY=720
FPSType=0
FPSCommon=30
FPSInt=30
FPSNum=30
FPSDen=1
ScaleType=bicubic
ColorFormat=NV12
ColorSpace=709
ColorRange=Partial
SdrWhiteLevel=300
HdrNominalPeakLevel=1000

[Audio]
MonitoringDeviceId=default
MonitoringDeviceName=默认
SampleRate=48000
ChannelSetup=Stereo
MeterDecayRate=23.53
PeakMeterType=0

[Panels]
CookieId=AC5A97F597497F4E

[Hotkeys]
OBSBasic.StartRecording={"bindings":[{"key":"OBS_KEY_F8"}]}
OBSBasic.StopRecording={"bindings":[{"key":"OBS_KEY_F8"}]}
`

function ini2obj(ini) {
  //每一个标签后面都有/n/n ,就先split
  var sections = ini.split('\n\n')
  //存储的对象
  var obj = {}

  for (var section of sections) {
      //去除前后（而不是中间的）空白字符和行终止符
      section = section.trim()
      //用字符串中间的/n分割成[数组[数组]]
      var sectionLines = section.split('\n')
      //获得标题
      var sectionTitle = sectionLines[0].slice(1,-1)
      //放入的对象
      var sectionInfos = {}
      //遍历数组sectionLines,
      for (let i = 0; i < sectionLines.length; i++) {
        //把sectionLines数组每一个数组中用=分割成子字符串数组
        var lineInfo = sectionLines[i].split('=')
        //获得标题：属性名
        var lineTitle = lineInfo[0]
        //获得目录,'='后面的数据：属性值
        var lineContent = lineInfo[1]
        //将属性名：属性值放入对象
        sectionInfos[lineTitle] = lineContent
      }
      //放入外层对象
      obj[sectionTitle] = sectionInfos
  }
  //返回值会按照字母顺序排序
  return obj
}



7-20
var avg = (avg,it,i) => (avg * i + it) / (i + 1)
ancestry
  .filter(it => it.sex == 'f')
  .map(it => it.died - it.born)
  .reduce(avg)

  7-21
  //Flattening
  var x = [['a',['b']],[[['c'],'d'],2],[4,5]]
  var x = [['a',['b']],[4,5]]
  //这样的话,数组里面的数组无法展开需要递归
  //有问题,当第一个是数字的时候直接添加
  function Rresult(x) {
    x.reduce((result , it) => {
    return [...result,...it]
  },[])
  }
  //函数（函数）
  //有些繁琐可以直接加进去,见adatuo-lodash
  var x = [['a',['b']],[[['c'],'d'],2],[4,5]]
  function Rresult(x) {//函数1
    //不是数组,变成数组
    if (!Array.isArray(x)) {
      return([x])
    }
    //函数二,需要返回值
    //没有Array.会Uncaught TypeError: x.reduce is not a function .因为数组里面有不是数组的元素
    return x.reduce((result , it) => { 
    return [...result,...Rresult(it)]
  },[])//要先有数组（空）才能返回值,相当于return []
  }
console.log(Rresult(x));

//Mother-child age difference
//平均值
var avg = (avg,it,i) => (avg * i + it) / (i + 1)
//byName,通过其更容易的找出每个人的属性
//创建空对象,存放名字：属性
var byName = {}
  for (let m of ANCESTRY_FILE) {
    //
    byName[m.name] = m
  }

function age(ANCESTRY_FILE) {
return  ANCESTRY_FILE.
  //先filter筛选,能找到mother信息的人
  filter(person => {
    return byName[person.mother] //person.mother母亲信息在表中,byName[person.mother],他们母亲的信息
}).
  //映射mother.age - age
  map(person =>{//这里的person已经被filter筛选过了
    return person.born - byName[person.mother].born 
}).
  reduce(avg)
}

  age(ANCESTRY_FILE)

//Every and then some
//every
let arey = [6,2,4]
arey.every(it => it > 0)
//全都一样返回真**
function every(arey,predicate) {
  for (let i = 0; i < arey.length; i++) {
    if (!predicate(arey[i],i,arey)) {
      return false
    }  
  }
  return true
}
function every2(arey,f) {
  return arey.reduce((result,item,i) => {
    return result && f(item,i,arey)
  },true)//初始值
}
every(arey,it => it > 0) //predicate = it

//some
arey.some(it => it > 0)
//其中一样真返回真**
function some(arey,predicate) {
  for (let i = 0; i < arey.length; i++) {
    if (predicate(arey[i],i,arey)) {
      return true
    }  
  }
  return false
}
function every2(arey,f) {
  return arey.reduce((result,item,i) => {
    return result || f(item,i,arey)
  },false)//初始值
}
some(arey,it => it > 0)
