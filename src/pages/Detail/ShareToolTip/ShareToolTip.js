import React from 'react';
import './ShareToolTip.scss';

const ShareToolTip = () => {
  return (
    <div className="toolTipContainer">
      <div className="toolTipLogos">
        <div className="toolTiplogoTweeter">
          <div className="tweeter"></div>
          <span className="toolTipText">트윗하기</span>
        </div>
        <div className="toolTiplogoFacebook">
          <div className="facebook"></div>
          <span className="toolTipText">공유하기</span>
        </div>
      </div>
      <div className="toolTipURLButton">
        <input
          className="toolTipURL"
          type="text"
          value="http://urls"
          disabled
        />
        <div className="toolTipButton">URL복사</div>
      </div>
    </div>
  );
};

export default ShareToolTip;
