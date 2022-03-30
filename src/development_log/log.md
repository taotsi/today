# 开发日志

## 3.30

前几天问Vince推荐个fancy点的web后端服务器的库，他说去看tokio。我看了三天文档，心想怎么还没讲到http。然后去tokio首页看了一下简介，发现这就是个单纯的异步库，只支持到TCP。妈的蛋，我可不想手撕一遍http协议，完全不感兴趣。又查了一下，tokio之上有个hyper，实现了http。hyper之上有个warp，实现了整个web后端，而且看起来很简单。所以我决定用warp了。
