let xhr = new XMLHttpRequest()
xhr.open('GET','https://class.damiaoedu.com:44313/statics/exam.html?examId=20240914%E7%BD%91%E7%BB%9C')
xhr.send()
console.log(xhr.responseText)
xhr.onload=()=>{
console.log(xhr.responseText)
}
console.log(xhr.responseText)