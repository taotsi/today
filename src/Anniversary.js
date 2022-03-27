import React from "react";
import { Header, List } from 'semantic-ui-react'
import anniversaries from "./anniversaries.json";
import { DateTime, Interval } from "luxon";
import { Outlet } from "react-router-dom";

export default class Anniversary extends React.Component {
  parse_anniversaries(now) {
    let parsed = [];
    for (let i = 0; i < anniversaries.length; i++) {
      const item = anniversaries[i];
      const date_then = DateTime.fromISO(item.date);
      const years_elapsed = now.year - date_then.year;
      const date_aligned = this.align_date(date_then, now);
      const interval = Interval.fromDateTimes(now, date_aligned);
      const days_till_next = Math.round(interval.length("days"));
      parsed.push({
        date: date_aligned,
        years_elapsed: years_elapsed,
        event: item.event,
        days_till_next: days_till_next
      });
    }
    return parsed;
  }

  align_date(date_then, now) {
    let result;
    if (date_then.month < now.month || (date_then.month === now.month && date_then.day < now.day)) {
      result = date_then.set({year: now.year + 1});
    } else {
      result = date_then.set({year: now.year});
    }
    return result;
  }

  render_event(event) {
    return <List.Item>{event.date.year}年，{event.event}，至今已有{event.years_elapsed}年</List.Item>;
  }

  render() {
    const now = DateTime.now().setZone("UTC+8");

    let parsed = this.parse_anniversaries(now);

    let nearest_interval = 99999;
    let nearest_date;
    let anniversaries_today = [];
    for (let i = 0; i < parsed.length; i++) {
      const ele = parsed[i];
      if (ele.days_till_next === 0) {
        anniversaries_today.push(ele);
      }
      if (ele.days_till_next < nearest_interval) {
        nearest_interval = ele.days_till_next;
        nearest_date = ele.date;
      }
    }

    let anniversaries_today_rendered;
    if (anniversaries_today.length === 0) {
      anniversaries_today_rendered = <p>无</p>
    } else {
      anniversaries_today_rendered = anniversaries_today.map(this.render_event);
    }

    let anniversaries_nearest = [];
    for (let i = 0; i < parsed.length; i++) {
      const ele = parsed[i];
      if (ele.days_till_next === nearest_interval) {
        anniversaries_nearest.push(ele);
      }
    }

    const anniversaries_nearest_rendered = anniversaries_nearest.map(this.render_event);

    return (
        <div>
          <p>今天是 {now.toISODate()}</p>
          <Header>今天的纪念日</Header>
          <List bulleted>
            {anniversaries_today_rendered}
          </List>
          <Header>距离下一个纪念日 {nearest_date.month}-{nearest_date.day} 还有 {nearest_interval} 天</Header>
          <List bulleted>
            {anniversaries_nearest_rendered}
          </List>
          <Outlet/>
        </div>
    );
  }
}
