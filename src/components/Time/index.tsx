import React, { useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/zh-cn';
import styles from './index.module.less';
import cs from 'classnames';
import { Link } from 'react-router-dom';

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);

function getHourDiff(time: dayjs.ConfigType, now: dayjs.ConfigType) {
  now = dayjs(Date.now());
  const before = dayjs(time);
  return now.diff(before, 'hour');
}

function getTimeDiff(
  time: dayjs.ConfigType,
  now: dayjs.ConfigType,
  keepWeek: boolean = true,
): string {
  now = dayjs(Date.now());
  const before = dayjs(time);
  const minDiff = now.diff(before, 'minute');
  const hourDiff = now.diff(before, 'hour');
  const dayDiff = now.diff(before, 'day');
  const yearDiff = now.diff(before, 'year');
  const weekDiff = now.diff(before, 'week');

  if (minDiff < 60) {
    return `${minDiff || 1}分钟`;
  }

  if (hourDiff >= 1 && hourDiff < 24) {
    return `${hourDiff}小时`;
  }

  if (dayDiff >= 1 && dayDiff < 7) {
    return `${dayDiff}天`;
  }

  if (weekDiff >= 1 && yearDiff <= 0 && keepWeek) {
    return `${weekDiff}周`;
  }

  return before.format('YYYY-MM-DD');
}

type TimeProps = {
  time?: dayjs.ConfigType;
  className?: string;
  linkTo?: string;
  keepWeek?: boolean;
};

const Time: React.FC<TimeProps> = ({
  time,
  className,
  linkTo,
  keepWeek = true,
}) => {
  const [now, setNow] = useState<number>(Date.now());

  useLayoutEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const hourDiff = getHourDiff(time, now);
    if (hourDiff < 1) {
      timer = setInterval(() => {
        const now = Date.now();
        const hourDiff = getHourDiff(time, now);
        setNow(now);
        if (hourDiff >= 1) {
          clearInterval(timer);
        }
      }, 60 * 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const diffTime = getTimeDiff(time, now, keepWeek);
  const _className = cs(className, styles['time']);
  return (
    <>
      {linkTo ? (
        <Link
          to={linkTo as any}
          className={_className}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <time>{diffTime}</time>
        </Link>
      ) : (
        <time className={_className}>{diffTime}</time>
      )}
    </>
  );
};

export default Time;
