# 开发日志

## 3.30

前几天问Vince推荐个fancy点的web后端服务器的库，他说去看tokio。

我看了三天文档，心想怎么还没讲到http。然后去tokio首页看了一下简介，发现这就是个单纯的异步库，只支持到TCP。

又查了一下，tokio之上有个hyper，实现了http。hyper之上有个warp，实现了整个web后端，而且看起来很简单。所以我决定用warp了。

## 4.03

折腾了三天终于解决cors问题了。

方法是用nginx做代理。服务器上是把443端口的`/api`请求转发到warp的3030。

本地是监听80端口，把`/`请求转发到react的3000端口，把`/api`请求转发到warp的3030端口。

不过有一个区别，服务器上需要在转发到3030时添加允许cors的header。但本地的任何转发都不需要该配置。本地的前后端都统一到了80端口，没有cors可以理解。但是服务器上的情况暂时不理解。

另外，通过react识别环境变量，决定后端的host是本地还是服务器。

anyway，它可以工作了。

## 4.08

今天把web后端做成了systemd的service。

- [ ] 手动输入非主页地址时会404

### 武汉房市销量预测

- [x] poc
- [ ] rust下的爬虫
  - [ ] http client, crate: reqwest
  - [ ] html parser
  - [ ] html data extractor
- [ ] 持久层，sql or file based?
  - [ ] 持久层的备份
- [ ] 可视化
