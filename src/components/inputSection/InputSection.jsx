import React, { useEffect, useRef } from "react";
import "./inputSection.scss";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import InfoIcon from "../../components/infoIcon/InfoIcon";

const InputSection = (props) => {
  const handleClick = (e) => {
    e.target.select();
  };

  const preventScroll = (e) => {
    e.target.blur();
  };

  return (
    <article>
      <Form.Label className="inputLabel" htmlFor={props.name}>
        {props.title}
        {props.optional && <span className="optional"> (optional)</span>}
        {props.desc && <InfoIcon className="info" desc={props.desc} />}
      </Form.Label>
      <InputGroup className="mb-3">
        {props.decorStart && (
          <InputGroup.Text
            style={{ background: "transparent" }}
            className="inputDecor"
          >
            {props.decorStart}
          </InputGroup.Text>
        )}

        <FormControl
          type="number"
          id={props.name}
          name={props.name}
          onChange={props.onChange}
          value={props.formData[props.name]}
          className="input"
          style={{ background: "transparent" }}
          onClick={handleClick}
          onWheel={preventScroll}
        />
        {props.decorEnd && (
          <InputGroup.Text
            style={{
              background: "transparent"
            }}
            className="inputDecor"
          >
            {props.decorEnd}
          </InputGroup.Text>
        )}
      </InputGroup>
    </article>
  );
};

export default InputSection;
