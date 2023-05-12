import React from "react";
import { Select } from "antd";

function SelectAll() {
  return (
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      options={[
        { value: "java", label: "Java" },
        { value: "js", label: "Java Script" },
        { value: "python", label: "Python" },
        { value: "cpp", label: "C++", disabled: true },
      ]}
    />
  );
}

export default SelectAll;
