import React, { useEffect, useRef } from "react";
import "./inputSection.scss";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import InfoIcon from "../../components/infoIcon/InfoIcon";

const InputSection = (props) => {
  const numberInputRef = useRef(null);

  useEffect(() => {
    const ignoreScroll = (e) => {
      e.preventDefault();
    };
    numberInputRef.current &&
      numberInputRef.current.addEventListener("wheel", ignoreScroll);
  }, [numberInputRef]);

  const handleClick = (e) => {
    e.target.select();
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
          ref={numberInputRef}
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
