import React, { FunctionComponent } from "react";

import "./index.scss";

interface Props {
  placeholder: string;
  suffix?: string;
  type?: string;
}

const EditText: FunctionComponent<Props> = ({
  placeholder,
  suffix = "",
  type = "text",
}) => {
  return (
    <div className="edit-text-container">
      {suffix && <div className="suffix">{suffix + " - "}</div>}
      <input type={type} placeholder={" "} />
      <span>{placeholder}</span>
    </div>
  );
};

export default EditText;
