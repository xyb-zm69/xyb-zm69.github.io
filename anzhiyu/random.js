var posts=["wenzhang/这是一篇新文章/","wenzhang/五爱市场一游/","wenzhang/测试/","wenzhang/电脑CMD下查找文件命令又快又好用/","wenzhang/kkkkk/","wenzhang/前面/","wenzhang/My-New-Post/","wenzhang/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };