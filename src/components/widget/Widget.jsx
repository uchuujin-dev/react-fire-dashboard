import React, { useState } from "react";
import "./widget.scss";
import { InputGroup, FormControl } from "react-bootstrap";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, useNavigate } from "react-router-dom";
const Widget = ({ widget, saveWidgetText }) => {
  const [toggleFlip, setToggleFlip] = useState(false);
  const [input, setInput] = useState({});
  const [diff, setDiff] = useState();

  function handleInput(event) {
    const { name, value } = event.target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function flipWidget() {
    if (widget.id !== "fire") {
      const currentState = toggleFlip;
      setToggleFlip(!currentState);
    }
  }
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  return (
    <div className={toggleFlip ? "widget is_flipped" : "widget"}>
      <div
        className="widget__front"
        onClick={() => {
          if (widget.id !== "fire") {
            setToggleFlip(true);
          } else {
            routeChange("/calculator");
          }
        }}
      >
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

          {widget.id !== "fire" ? (
            <span
              className="link"
              onClick={() => {
                flipWidget();
              }}
            >
              {widget.link}
            </span>
          ) : (
            <Link to="/calculator" style={{ textDecoration: "none" }}>
              <span className="link">{widget.link}</span>
            </Link>
          )}
        </div>
        <div className="right">
          {diff ? (
            <div className="percentage positive">
              <KeyboardArrowUpIcon /> {diff}%
            </div>
          ) : (
            <div className="percentage positive">
              <KeyboardArrowUpIcon /> ?
            </div>
          )}

          {widget.icon}
        </div>
      </div>

      <div className="widget__back" onClick={() => flipWidget()}>
        <div className="left">
          <span className="title">{widget.title}</span>
          {widget.text.map((text) => {
            return (
              <div>
                <label htmlFor={text.title} className="counter">
                  {text.title}
                </label>

                <InputGroup className="mb-3">
                  <InputGroup.Text>£ </InputGroup.Text>
                  <FormControl
                    className="widget__input"
                    name={text.id}
                    type="number"
                    placeholder={text.content}
                    onChange={handleInput}
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Pound amount"
                  />
                </InputGroup>
              </div>
            );
          })}

          <span
            className="link"
            onClick={(e) => {
              saveWidgetText(widget.id, input);
              flipWidget();
              e.stopPropagation();
            }}
          >
            SAVE
          </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />?
          </div>
          {widget.icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;
