import { useEffect, useState } from "react";
import { Button, Htag, Ptag, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter " + counter);

    return function cleanup() {
      console.log("Unmount");
    };
  });

  useEffect(() => {
    console.log("Mounted");
  }, []);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        className="dsfsdf"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Ptag size="s">Example</Ptag>
      <Ptag size="m">Example</Ptag>
      <Ptag size="l">Example</Ptag>
      <Tag size="s" color="ghost">
        Ghost
      </Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={4}></Rating>
    </>
  );
}
