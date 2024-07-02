import { useState } from "react";
import Alert from "./Alert";
import style from "./ButtonComponent.module.css";

interface Props {
  children: string;
  colorName: string;
}
const ButtonComponent = ({ children, colorName = "danger" }: Props) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className={[style.container, style["btn-" + colorName]].join(" ")}>
      {visibility && <Alert onClose={() => setVisibility(false)}></Alert>}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setVisibility(true)}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
