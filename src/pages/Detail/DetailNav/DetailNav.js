import React, { useState } from 'react';

import './DetailNav.scss';

const DetailNav = ({ scrollToReview }) => {
  const [isButtonClicked, setIsButtonClicked] = useState('상품설명');
  const buttons = ['상품설명', '후기'];

  const moveToBottom = button => {
    if (button === '후기') {
      scrollToReview();
      setIsButtonClicked(button);
    }
  };

  return (
    <nav className="detailNavigator">
      <nav className="navigatorContainer">
        {buttons.map((button, index) =>
          isButtonClicked === button ? (
            <div
              onClick={button => {
                moveToBottom(button);
              }}
              className="navigatorButton clicked"
              key={index}
            >
              <span>{button}</span>
            </div>
          ) : (
            <div
              onClick={button => {
                moveToBottom(button);
              }}
              className="navigatorButton"
              key={index}
            >
              <span>{button}</span>
            </div>
          )
        )}
        <div></div>
      </nav>
    </nav>
  );
};

export default DetailNav;
