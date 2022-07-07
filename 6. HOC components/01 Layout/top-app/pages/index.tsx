import { useEffect, useState } from "react";
import { Button, Htag, Ptag, Tag, Rating } from "../components";
import { Layout } from '../Layout/Layout';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag="h1">H1</Htag>
      <Button appearance="primary" className="dsfsdf" arrow="right">
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
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
    </Layout>
  );
}
