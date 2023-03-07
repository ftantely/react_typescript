import React, { useState } from "react";

//TextField: => Declare the type of the variable(in this case Function Component)
//< > angle brackets the props that it takes

/*const TextField: React.FC<{ text: string }> = () => {
  return <input />;
};
export default TextField;*/

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
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState<TextNode>({ text: "Hello" });
  /* setCount('hello') wouldn't work because typescript infers it's a number instead of a string */
  /* const [count, setCount] = useState< >(5) => you can tell typescript what the type
  of the initial state and new value should exactly be */
  setCount({ text: "bye" });
  return <input />;
};

export default TextField;
