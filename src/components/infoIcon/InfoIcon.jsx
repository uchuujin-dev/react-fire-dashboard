import React, { useRef, useState } from "react";
import "./infoIcon.scss";
import { Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

function InfoIcon({ desc }) {
  return (
    <>
      <OverlayTrigger
        key="info"
        placement="right"
        overlay={<Tooltip id={`tooltip-info`}>{desc}</Tooltip>}
      >
        <button style={{ border: "none", background: "transparent" }}>
          <HelpRoundedIcon className="icon" />
        </button>
      </OverlayTrigger>
    </>
  );
}

export default InfoIcon;
