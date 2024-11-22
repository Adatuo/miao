const repl = require('node:repl')


var messages = []


repl.start({
  prompt: 'Me> ',
  eval: async function(cmd, context, file, cb) {
    messages.push({ "role": "user", "content": cmd })

    var aiAnswer = await fetch('https://ai.chat444.com/api/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZW1vMSIsImlhdCI6MTczMTg5NTg5NywiZXhwIjoxNzMyMTU1MDk3fQ.G-eQ7qdZmdsDUfYHy7Wv-EzwhNri9JmOZcL_cpy0zvJxDTtiWUBiqTU4eoLPfIhhhO3YAUyelz_MSfMxEj0fPw',
        'content-type': 'application/json',
      },
      body: JSON.stringify(
        {
          "messages": [
              {
                  "role": "system",
                  "content": "\nYou are ChatGPT, a large language model trained by OpenAI.\nKnowledge cutoff: 2021-09\nCurrent model: GPT-4o-mini\nCurrent time: 2024/11/18 14:48:17\n"
              },
              ...messages
          ],
          //"stream": true,
          "model": "GPT-4o-mini",
          "contentType": "Text",
          "temperature": 0.5,
          "presence_penalty": 0,
          "frequency_penalty": 0,
          "plugins": [
              {
                  "id": 1,
                  "uuid": "594a90be-0f21-4f72-9a22-4403e5028f81",
                  "name": "联网插件",
                  "value": false
              }
          ]
      }      
      )
    }).then(it => it.json())

    messages.push({"role": "assistant", "content": aiAnswer.choices[0].message.content})//choices是fetch在浏览器返回的数组对象

    cb(null, aiAnswer.choices[0].message.content)
  },
  writer(answer) {//用于格式化每个output的输出 因为repl本身返回的就是js，会把output(answer)当作字符串
    return 'AI> ' + answer
  }
})