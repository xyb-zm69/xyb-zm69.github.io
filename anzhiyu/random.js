var posts=["wenzhang/这是一篇新文章/","wenzhang/kkkkk/","wenzhang/前面/","wenzhang/My-New-Post/","wenzhang/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };