var posts=["2024/12/31/这是一篇新文章/","2024/12/30/My-New-Post/","2024/12/29/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };