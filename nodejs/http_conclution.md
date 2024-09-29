# http协议的报文格式简单，但是它有很多的请求/响应头 各种头部由有着各种功能及定义以及用处

## HTTP协议的请求/响应头介绍

### HTTP请求示例
```
GET / HTTP/1.1
Accept: text/html, application/json
User-Agent: Chrome/WindowsNT
Accept-Language: en_US, zh_CN
```

### HTTP响应示例
```
HTTP/1.1 200 OK
Date: 2024xxxxx
Content-Length: 2343
Content-Type: text/html; charset=utf-8
```

### 常用http header介绍(均可以使用小写)

#### Accept
- **作用**: 请求头，告诉服务端请求方能/想接收什么类型的响应体，服务器可以忽略这个头，但如果服务器支持，则会优先返回这个头所列的类型。
- **示例**: `Accept: text/html, text/plain`

#### Accept-Encoding
- **作用**: 请求头，告诉服务器客户端/浏览器能接受什么样的压缩算法。HTTP协议可以将请求体/响应体压缩后传送，减少网络流量，但要告诉对方使用了什么压缩算法。
- **示例**: `Accept-Encoding: gzip, deflate, br, zstd`

#### Content-Encoding
- **作用**: 响应/请求头，告诉对方请求/响应体是用什么压缩算法压缩的。一般用于响应头，因为请求体通常比较小，没必要压缩。
- **示例**: `Content-Encoding: gzip`

#### Accept-Language
- **作用**: 请求头，告诉服务器客户端（的用户）希望使用的自然语言。使用逗号分隔不同的语言，`q`表示对这种语言的兴趣度。
- **示例**: `Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7`

#### Host
- **作用**: 请求头，告诉服务器浏览器是用什么域名请求的这个资源。服务器可以根据这个请求头扮演不同的网站，允许一台服务器提供多个网站服务。
  并且如果不发送这个头，服务器其实不知道我们用的是什么域名在访问它，因为解析域名发生在客户端与dns服务器，与想要连接的服务器无关。
  这样一来如果一台服务器想开设多个域名的不同网站，就可以根据这个头来知道用户请求的是哪个网站。
  github pages就是这样的
    xieranmaya.github.io
    zhangshan.github.io
    marjin.github.io
  难道github会为这每个域名分配一台服务器吗？
    当然是不会的。这些站对应的服务器可能是相同的。ping一个以上几个域名就会发现ip大概率是相同的。
  
- **示例**: `Host: eloquentjavascript.net`

#### Referer
- **作用**: 请求头，告诉服务器是谁/哪个页面在请求当前资源。或者：告诉服务器，当前资源请求到之后，会用在哪个页面中。或者：哪个页面在引用这个资源。它总是拿地址栏里的地址的。注意这个头的单词拼写错误了，但也就这么保留了。
  - **一般用处**：
  存在的问题：它可能泄露隐私。当访问A页面时，A页面使用了某个其它网站b资源，在请求b资源的时候，A页面的完整地址会被放到b资源的`Referer`请求头里，被b资源的网站知道。当然这个问题现在可以解决，可以通过设置页面的响应头`Referrer-Policy`来控制浏览器让它不发送`referer`或不发送完整`url`到`referer`头中。
  这个头还可以用来防（盗链）。什么是防盗链：一个网站的资源，只希望自己的网站使用，不希望别的网站使用。当一个服务器接收到一个请求时，可以查看这个请求的`referer`是哪个页面（即这个资源将会被哪个页面使用），如果不是自己网站的页面，则不返回内容。
- **示例**: `Referer: https://eloquentjavascript.net/`

#### Referrer-Policy
- **作用**: 针对HTML页面的响应头（非页面资源不需要这个响应头），设置页面的请求是否带`Referer`头或者不带完整`url`，只带网站名。
- **示例**: `Referrer-Policy: strict-origin-when-cross-origin`

#### Content-Type
- **作用**: 请求头/响应头，告诉对方请求体或响应体的媒体类型（MIME Type）。
- **常见文件格式的媒体类型**:
  - html:`text/html`
  - html:`text/html;     charset=utf-8`
  - css:`text/css`
  - json:`application/json`
  - js:`application/javascript`
  - png:`image/jpeg`
  - svg: `image/xml+svg`

#### Date
- **作用**: 响应头，告诉客户端服务器的时间，或理解为响应的时间。
- **示例**: `Date: Tue, 24 Sep 2024 12:23:05 GMT`

#### Content-Length
- **作用**: 请求头/响应头，告诉对方请求体、响应体的长度，以字节为单位。
- **示例**: `Content-Length: 234234`

#### Transfer-Encoding
- **作用**: 请求头/响应头。有些时候，我们无法预知请求体或响应的长度，比如因为`body`是实时生成的，所以就不能用`content-length`来告诉对方`body`有多长。就可以用这个头来说明，`body`是一点点传的，直到连接断开。
- **示例**: `Transfer-Encoding: chunked`

#### Last-Modified & If-Modified-Since
- **作用**: 协商缓存机制    
- `Last-Modified`:  响应头，告诉浏览器这个资源的最后修改时间
  在下一次浏览器请求这个资源时，可以告诉服务器自己这边这个资源的最后修改时间，服务器如果看到这个资源自那个时间之后没有修改过，则告诉浏览器“就用你那边的版本”，不用发送响应体了。以此实现了缓存，或者更精确的说，是协商缓存。
- `If-Modified-Since`:
    请求头，浏览器告诉服务器当前请求的这个资源最后修改时间是什么时候，这个时间就是在上一次请求这个资源时，响应头中用`last-modified`告诉浏览器的。
    这个头的可以理解为：如果这个资源自那个时间之后修改过，就请给我发送新的版本，如果没有，就告诉我。
    如果真的没有修改过，服务器会响应`304`状态码，对应的状态文字是`not modifed`
- **示例**:`last-modified: Tue, 06 Aug 2024 05:54:55 GMT`
`if-modified-since: Tue, 06 Aug 2024 05:54:55 GMT`
- **示例协商缓存的通信过程**:
```
GET /foo.png HTTP/1.1
=======================
HTTP/1.1 200 OK
Last-Modified: xxxxxx

(响应体)
=======================
GET /foo.png HTTP/1.1
If-Modified-Since: xxxxxx
=======================
HTTP/1.1 304 Not Modified(无响应体)
```

#### ETag & If-None-Match
- **作用**: 
- `ETag: hashcode`:响应头，服务器告诉浏览器这个资源的hash
- `If-None-Match: hashcode`:  请求头，浏览器告诉服务器，如果这个服务器上这个资源的hash依然是这个值，则就不用返回给响应体了，即服务器可以返回`304`。如果变了，则返回新的响应体，状态码`200`
- **示例协商缓存通信过程**:
```
GET /foo.png HTTP/1.1
=======================
HTTP/1.1 200 OK
ETag: "76Z5H6Tc6BMBASQJikyOAS5p"

(响应体)
=======================
GET /foo.png HTTP/1.1
If-None-Match: "76Z5H6Tc6BMBASQJikyOAS5p"
=======================
HTTP/1.1 304 Not Modified(无响应体)
```

#### Expires
- **作用**: 响应头，表示资源的过期时间，在过期之前浏览器可以不发请求，直接使用本地缓存。
- **示例**: `Expires: Thu, 01 Jan 1970 00:00:01 GMT`

#### User-Agent
- **作用**: 请求头，告诉服务器客户端的浏览器及操作系统信息。
- **示例**: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)`

#### Server
- **作用**: 响应头，服务器自报家门，类似于`User-Agent`。
- **示例**: `Server: Tengine/Aserver`

#### Content-Security-Policy
- **作用**: 响应头，设置页面的内容安全策略（CSP），控制页面能够连接、加载、嵌套的资源。
- **示例**:
```
default-src 'none';
script-src github.githubassets.com;
style-src 'unsafe-inline' github.githubassets.com;
```

#### Cache-Control
- **作用**: 请求头/响应头，用于控制缓存相关的功能。具体内容较复杂，参考[MDN Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)。
- **示例**: `Cache-Control: no-cache`

#### Connection
- **作用**: 请求头/响应头，设置是否保持HTTP连接，支持长连接。
- **示例**: `Connection: keep-alive`

### CORS相关头部

#### 简单请求
- **常见类型**: GET, POST, HEAD（不包含自定义头部）

#### 非简单请求
- **作用**: 需要进行跨域资源共享（CORS）的预检请求，验证正式请求是否可以发起。
- **预检请求相关头部**:
  - `Access-Control-Allow-Origin`: 允许的跨域请求源 * / 特定网站
  - `Access-Control-Allow-Methods`: 允许的请求方法
  - `Access-Control-Max-Age`: 预检请求响应的有效期
  - `Access-Control-Allow-Headers`: 允许的自定义请求头
  - `Access-Control-Allow-Credentials`: 是否允许请求带凭据信息
