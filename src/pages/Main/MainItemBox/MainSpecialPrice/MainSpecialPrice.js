import React, { useEffect } from 'react';
import { useState } from 'react';
import Item from '../../../../components/Item/Item';
import './MainSpecial.scss';

const MainSpecialPrice = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2022-10-19T24:00:00') - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="specialPriceContainer">
      <div className="specialTimeBox">
        <p className="specialDailyText">일일특가</p>
        <p className="specialGrayText">24시간 한정 특가</p>
        <span className="specialTimer">{timeLeft.hours}:</span>
        <span className="specialTimer">
          {timeLeft.minutes < 10
            ? '0' + timeLeft.minutes + ':'
            : timeLeft.minutes + ':'}
        </span>
        <span className="specialTimer">
          {timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}
        </span>
        <p className="specialLgrayText">망설이면 늦어요!</p>
      </div>
      <Item type="할인특가" />
      <Item type="할인특가" />
    </div>
  );
};

export default MainSpecialPrice;
