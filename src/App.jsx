import Hero from "./Hero";
import Nav from "./Nav";
import Project from "./Project";
import Section from "./Section";
import Button from "./Button";
import Title from "./Title";
import Footer from "./Footer";
import { IoPaperPlane, IoPlay, IoCloseCircleOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

function App() {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <Nav />
      <Section>
        <Hero />
        <Button>
          <IoPaperPlane size="20px" />
          <span>Lets talk</span>
        </Button>
        <Button border={false} onClick={() => setModalState(true)}>
          <IoPlay size="20px" />
          <span className="font-medium">Elevator pitch</span>
        </Button>
        <Modal
          isOpen={modalState}
          onRequestClose={() => setModalState(false)}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <div className="text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MG5vFusc5Mc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <Button border={false} onClick={() => setModalState(false)}>
              <IoCloseCircleOutline size="20px" />
              <span className="font-medium">Close</span>
            </Button>
          </div>
        </Modal>
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
