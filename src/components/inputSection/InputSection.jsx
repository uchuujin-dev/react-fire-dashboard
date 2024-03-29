import React, { useState } from "react";
import "./inputSection.scss";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import InfoIcon from "../../components/infoIcon/InfoIcon";

const InputSection = (props) => {
  const handleClick = (e) => {
    e.target.select();
    // console.log(e.target);
  };

  const preventScroll = (e) => {
    e.target.blur();
  };

  const [validationWarning, setValidationWarning] = useState(false);

  function enforceMinMax(e) {
    if (e.target.value !== "") {
      if (
        parseInt(e.target.value) < parseInt(e.target.min) ||
        parseInt(e.target.value) > parseInt(e.target.max)
      ) {
        setValidationWarning(true);
        props.setIsDisabled(true);
        props.setWarning((prev) => {
          return {
            ...prev,
            [e.target.name]: "Validation error"
          };
        });
      } else {
        setValidationWarning(false);
        if (props.warning && props.warning[e.target.name]) {
          props.setWarning((prev) => {
            if (prev) {
              let warningObj = prev;
              delete warningObj[e.target.name];
              return warningObj;
            } else {
              return prev;
            }
          });
        }
        setTimeout(() => {
          if (Object.keys(props.warning).length === 0) {
            // console.log("keys are none");
            props.setIsDisabled(false);
          }
        }, 100);
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
      <InputGroup>
        {props.decorStart && (
          <InputGroup.Text
            style={{ background: "transparent" }}
            className={validationWarning ? "inputDecor warning" : "inputDecor"}
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
            className={validationWarning ? "inputDecor warning" : "inputDecor"}
          >
            {props.decorEnd}
          </InputGroup.Text>
        )}
      </InputGroup>
      {validationWarning ? (
        <p className="warningMsg">
          &nbsp; &nbsp;{" "}
          {`Please enter a number between ${props.min} and ${props.max} `}{" "}
        </p>
      ) : (
        <p className="warningMsg"> &nbsp; </p>
      )}
    </article>
  );
};

export default InputSection;
