import { Button, Htag, Ptag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className='dsfsdf' arrow='right'>Button</Button>
      <Button appearance="ghost" arrow='down'>Button</Button>
      <Ptag size='s'>Example</Ptag>
      <Ptag size='m'>Example</Ptag>
      <Ptag size='l'>Example</Ptag>
    </>
  );
}
