import React from "react"
import { Outlet } from "react-router-dom";
import { Header, List } from 'semantic-ui-react'

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
          <p>你好！请随便看看</p>
          <Header>蓝图</Header>
          <List bulleted>
            <List.Item>幻想地图生成器</List.Item>
            <List.Item>像素画图板</List.Item>
            <List.Item>出游规划，高德地图可视化，旅行商问题，时间窗约束</List.Item>
            <List.Item>一种用于辩论的论坛，及其交互形式，重点是逻辑和证据</List.Item>
            <List.Item>一种分布式的多人游戏，用户通过脚本控制agent行为</List.Item>
            <List.Item>武汉新房销量，时序预测</List.Item>
            <List.Item>可视化的算法动画演示</List.Item>
          </List>
          <Header>技术栈</Header>
          <List bulleted>
            <List.Item>
              前端
              <List bulleted>
                <List.Item>React</List.Item>
                <List.Item>Semantic UI</List.Item>
              </List>
            </List.Item>
            <List.Item>
              后端
              <List bulleted>

              </List>
            </List.Item>
            <List.Item>
              算法
              <List bulleted>

              </List>
            </List.Item>
          </List>
          <Header>一些想法</Header>
          <List bulleted>
            <List.Item>HTML原教旨主义，用react是为方便，但不喜欢过度设计</List.Item>
            <List.Item>Web前端的重点是交互和可视化</List.Item>
            <List.Item>此网站做着玩，不严肃。用Web是因为方便简单</List.Item>
            <List.Item></List.Item>
          </List>
          <Outlet/>
        </div>
    );
  }
}