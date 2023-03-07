import React from "react";

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

const TextField: React.FC<Props> = () => {
  return <input />;
};

export default TextField;
