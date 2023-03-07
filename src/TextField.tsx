import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean /* "?" means the prop is optional */;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  // handleChange?: () => void; Hover over "onChange" to know the type in ()
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: "Hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    /* Hover over ref to know what to put by "useRef" */
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
