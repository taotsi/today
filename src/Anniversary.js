import React from "react";
import anniversaries from "./anniversaries.json";
import {DateTime} from "luxon";
import { Outlet } from "react-router-dom";

export default class Anniversary extends React.Component {
  render() {
    const now = DateTime.now().setZone("UTC+8");

    let hit = [];
    for (let i = 0; i < anniversaries.length; i++) {
      const item = anniversaries[i];
      const date = DateTime.fromISO(item.date).setZone("UTC+8");
      if (date.month === now.month && date.day === now.day) {
        const event = {
          date: date,
          years_elapsed: now.year - date.year,
          event: item.event
        }
        hit.push(event);
      }
    }

    let render_hit;
    if (hit.length === 0) {
      render_hit = <p>今天不是任何纪念日</p>
    } else {
      render_hit = hit.map(event => <p>{event.date.year}年，{event.years_elapsed}年前的今天，{event.event}</p>);
    }

    return (
        <div>
          <p>今天是{now.toISODate()}</p>
          {render_hit}
          <Outlet/>
        </div>
    );
  }
}
