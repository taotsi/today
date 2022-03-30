import React from "react"
import {Outlet} from "react-router-dom";
import {Header, List} from 'semantic-ui-react'

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
          <p>你好！请随便看看</p>
          <Header>蓝图</Header>
          <List bulleted>
            <List.Item>幻想地图生成器</List.Item>
            <List.Item>
              像素画图板
              <List bulleted>
                <List.Item>像素动画板</List.Item>
              </List>
            </List.Item>
            <List.Item>出游规划，旅行商问题</List.Item>
            <List.Item>跑山公路搜索</List.Item>
            <List.Item>一种用于辩论的论坛</List.Item>
            <List.Item>一种分布式的多人游戏</List.Item>
            <List.Item>武汉新房销量，时序预测</List.Item>
            <List.Item>可交互、可视化的算法演示</List.Item>
          </List>
          <Header>技术栈</Header>
          <List bulleted>
            <List.Item>前端框架：react</List.Item>
            <List.Item>前端UI：semantic ui</List.Item>
            <List.Item>web服务器：nginx</List.Item>
            <List.Item>后端：tokio</List.Item>
          </List>
          <Outlet/>
        </div>
    );
  }
}