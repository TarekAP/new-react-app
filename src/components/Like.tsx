import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  children: string;
  click: () => void;
  colorName: string;
}

const Like = ({ click, colorName }: Props) => {
  const [currentState, setNewState] = useState(false);

  const toggle = () => {
    setNewState(!currentState);
    click();
  };
  return (
    <AiFillHeart
      color={currentState == true ? "blue" : colorName}
      onClick={toggle}
    />
  );
};

export default Like;
