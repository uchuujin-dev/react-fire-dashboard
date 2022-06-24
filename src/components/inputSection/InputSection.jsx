import React, { useState } from "react";
import "./inputSection.scss";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import InfoIcon from "../../components/infoIcon/InfoIcon";

const InputSection = (props) => {
  const handleClick = (e) => {
    e.target.select();
    console.log(e.target);
  };

  const preventScroll = (e) => {
    e.target.blur();
  };

  const [validationWarning, setValidationWarning] = useState(false);

  function enforceMinMax(e) {
    console.log(e.target);
    console.log("inBlur", e.target.value <= e.target.min);
    if (e.target.value !== "") {
      if (
        parseInt(e.target.value) <= parseInt(e.target.min) ||
        parseInt(e.target.value) >= parseInt(e.target.max)
      ) {
        setValidationWarning(true);
        // props.setValidationWarning((prev) => {
        //   return;
        // });
        console.log("in true", validationWarning);
      } else {
        setValidationWarning(false);
      }
    }
  }

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
            className={validationWarning ? "input warning" : "inputDecor"}
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
          className={validationWarning ? "input warning" : "input"}
          style={{ background: "transparent" }}
          onClick={handleClick}
          onWheel={preventScroll}
          min={props.min}
          max={props.max}
          required={!props.optional}
          onBlur={enforceMinMax}
        />
        {props.decorEnd && (
          <InputGroup.Text
            style={{
              background: "transparent"
            }}
            className={validationWarning ? "input warning" : "inputDecor"}
          >
            {props.decorEnd}
          </InputGroup.Text>
        )}
      </InputGroup>
    </article>
  );
};

export default InputSection;
