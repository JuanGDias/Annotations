import React from "react";
import Radio from "@mui/material/Radio";

import "./style.css";

function RadioButton({ selectedValue, handleChange }) {
  const CustomRadio = ({ checked, onChange, value }) => (
    <Radio
      sx={{
        color: "#FFD3CA",
        "&.Mui-checked": { color: "#EB8F7A" },
      }}
      checked={checked}
      onChange={onChange}
      value={value}
    />
  );

  return (
    <div className="radioOptions">
      <div>
        <CustomRadio
          checked={selectedValue === "all"}
          onChange={(e) => handleChange(e.target)}
          value="all"
        />
        <span>Todos</span>
      </div>
      <div>
        <CustomRadio
          checked={selectedValue === "true"}
          onChange={(e) => handleChange(e.target)}
          value="true"
        />
        <span>Prioridade</span>
      </div>
      <div>
        <CustomRadio
          checked={selectedValue === "false"}
          onChange={(e) => handleChange(e.target)}
          value="false"
        />
        <span>Normal</span>
      </div>
    </div>
  );
}

export default RadioButton;
