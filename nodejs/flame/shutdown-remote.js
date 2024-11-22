// var http = require("http")
// var child_process = require("child_process");
// var port = 8045



// http.createServer((req,res)=>{
//   if (req.url=='/shutdown') {
//     child_process.exec('shutdown -a -t 0')
//   }
// }).listen(8045)

const http = require("http");
const child_process = require("child_process");
const port = 8045;

http.createServer((req, res) => {
  if (req.url === '/shutdown') {
    // 执行 shutdown 命令
    child_process.exec('shutdown /s /t 0', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error executing shutdown command: ' + error.message);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Shutdown command executed successfully');
    });
  } else {
    // 处理其他请求
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(port, () => {
  console.log('Server listening on port', port);
});
