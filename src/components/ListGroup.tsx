import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSeleted: (item: string) => void;
}

function ListGroup({ items, heading, onSeleted }: Props) {
  //hook
  const [selectedIndex, setSelectedindex] = useState(-1);

  //const
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedindex(index);
              onSeleted(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
