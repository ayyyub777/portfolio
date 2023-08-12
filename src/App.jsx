import Hero from "./Hero";
import Nav from "./Nav";
import Project from "./Project";
import Section from "./Section";
import Button from "./Button";
import Title from "./Title";
import Footer from "./Footer";
import { IoPaperPlane, IoPlay } from "react-icons/io5";

function App() {
  return (
    <>
      <Nav />
      <Section>
        <Hero />
        <Button>
          <IoPaperPlane size="20px" />
          <span>Lets talk</span>
        </Button>
        <Button border={false}>
          <IoPlay size="20px" />
          <span className="font-medium">Elevator pitch</span>
        </Button>
      </Section>
      <Section>
        <Title>Projects</Title>
        <Project />
      </Section>
      <Section>
        <Footer />
      </Section>
    </>
  );
}

export default App;
