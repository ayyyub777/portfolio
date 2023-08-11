import Hero from "./Hero";
import Nav from "./Nav";
import Project from "./Project";
import Section from "./Section";
import Button from "./Button";
import Title from "./Title";
import Footer from "./Footer";
import { FaPaperPlane, FaRegCirclePlay } from "react-icons/fa6";

function App() {
  return (
    <>
      <Nav />
      <Section>
        <Hero />
        <Button className="mb-0">
          <FaPaperPlane size="20px" />
          <span>Lets talk</span>
        </Button>
        <Button border={false}>
          <FaRegCirclePlay size="20px" />
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
