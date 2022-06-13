import React, { useState } from "react";
import "./widget.scss";

const Widget = ({ widget }) => {
  const [toggleFlip, setToggleFlip] = useState(false);

  function isFlipped() {
    const currentState = toggleFlip;
    setToggleFlip(!currentState);
  }
  return (
    <div
      className={toggleFlip ? "widget is_flipped" : "widget"}
      onClick={() => isFlipped()}
    >
      <div className="widget__front">
        <div className="left">
          <span className="title">{widget.title}</span>
          {widget.text.map((text) => {
            return (
              <div>
                <span className="counter">{text.title}</span> &nbsp;
                <span className="counter">{text.content}</span>
              </div>
            );
          })}

          <span className="link">{widget.link}</span>
        </div>
        <div className="right">{widget.icon}</div>
      </div>

      <div className="widget__back">
        <div className="left">
          <span className="title">{widget.title} BACK</span>
          {widget.text.map((text) => {
            return (
              <div>
                <span className="counter">{text.title}</span> &nbsp;
                <span className="counter">{text.content}</span>
              </div>
            );
          })}

          <span className="link">{widget.link}</span>
        </div>
        <div className="right">{widget.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
