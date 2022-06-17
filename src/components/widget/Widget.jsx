import React, { useState } from "react";
import "./widget.scss";
import { InputGroup, FormControl } from "react-bootstrap";

const Widget = ({ widget, saveWidgetText }) => {
  const [toggleFlip, setToggleFlip] = useState(false);
  const [input, setInput] = useState({});

  function handleInput(event) {
    const { name, value } = event.target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function flipWidget() {
    const currentState = toggleFlip;
    setToggleFlip(!currentState);
  }
  return (
    <div className={toggleFlip ? "widget is_flipped" : "widget"}>
      <div className="widget__front" onClick={() => setToggleFlip(true)}>
        <div className="left">
          <span className="title">{widget.title}</span>
          {widget.text.map((text) => {
            return (
              <div>
                <span className="counter">{text.title}</span>
                <span className="counter">{text.content}</span>
              </div>
            );
          })}

          <span className="link" onClick={() => flipWidget()}>
            {widget.link}
          </span>
        </div>
        <div className="right">{widget.icon}</div>
      </div>

      <div className="widget__back">
        <div className="left">
          <span className="title">{widget.title} BACK</span>
          {widget.text.map((text) => {
            return (
              <div>
                <label htmlFor={text.title} className="counter">
                  {text.title}
                </label>

                <InputGroup className="mb-3">
                  <InputGroup.Text>£ </InputGroup.Text>
                  <FormControl
                    name={text.id}
                    type="number"
                    placeholder={text.content}
                    onChange={handleInput}
                    aria-label="Pound amount"
                  />
                </InputGroup>
              </div>
            );
          })}

          <span
            className="link"
            onClick={() => {
              saveWidgetText(widget.id, input);
              flipWidget();
            }}
          >
            SAVE
          </span>
        </div>
        <div className="right">{widget.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
