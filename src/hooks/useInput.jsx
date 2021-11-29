import { useState } from "react";

export default function useInput(props) {
  const [value, setValue] = useState(props?.text || "");

  function onChange(e) {
    setValue(e.target.value);
  }

  return [value, onChange];
}
