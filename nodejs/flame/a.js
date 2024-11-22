// {
//   "messages": [
//       {
//           "role": "system",
//           "content": "\nYou are ChatGPT, a large language model trained by OpenAI.\nKnowledge cutoff: 2021-09\nCurrent model: GPT-4o-mini\nCurrent time: 2024/11/18 14:48:17\n"
//       },
//       {
//           "role": "user",
//           "content": "你的信息库"
//       }
//   ],
//   "stream": true,
//   "model": "GPT-4o-mini",
//   "contentType": "Text",
//   "temperature": 0.5,
//   "presence_penalty": 0,
//   "frequency_penalty": 0,
//   "plugins": [
//       {
//           "id": 1,
//           "uuid": "594a90be-0f21-4f72-9a22-4403e5028f81",
//           "name": "联网插件",
//           "value": false
//       }
//   ]
// }
const fs = require('node:fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  });
  setImmediate(() => {
    console.log('immediate');
  });
});
