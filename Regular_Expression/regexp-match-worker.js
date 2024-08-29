//this接受发过来的数据
this.addEventListener('message',e => {
  var data = e.data
  var re = data.re
  var string = data.string

  var matches = []  //符合re条件的就加进来
  var match = null 

  while (match = re.exec(string)) {
     matches.push(match)
    if (re.global == false) {
      break
    } 
  }
  postMessage(matches)//work是要将值发送回去,而不需要返回值return matches
})