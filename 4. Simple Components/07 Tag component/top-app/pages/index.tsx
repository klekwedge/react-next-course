import { Button, Htag, Ptag,Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className='dsfsdf' arrow='right'>Button</Button>
      <Button appearance="ghost" arrow='down'>Button</Button>
      <Ptag size='s'>Example</Ptag>
      <Ptag size='m'>Example</Ptag>
      <Ptag size='l'>Example</Ptag>
      <Tag size='s' color='ghost'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </>
  );
}
