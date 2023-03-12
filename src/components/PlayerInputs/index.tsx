import React, { useState } from "react";
import PropTypes from "prop-types";
import Inputs from "./Inputs";
import Welcome from "./Welcome";

const PlayerInputs = (_props: any) => {
  const [name, setName] = useState<string>("");

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {name ? <Inputs /> : <Welcome name={name} setName={setName} />}
    </div>
  );
};

PlayerInputs.propTypes = {};

export default PlayerInputs;
