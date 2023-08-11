import Button from "./Button";
import {
  FaPaperPlane,
  FaRegFileLines,
  FaArrowRightLong,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="rounded-2xl bg-light-gray p-8 text-center sm:text-left">
        <h1 className="mb-8 max-w-lg text-xl font-bold text-black">
          Have an interesting project in mind? 👋
        </h1>
        <p className=" text-md mb-10 max-w-lg text-black">
          I am a digital designer with 7+ years of experience and a passion for
          web-design, ecommerce, branding and illustrations. I am comfortable
          working with no-code tools, UI/UX, animations and always pay great
          attention to details. I love designing new brands or making design
          resources and tools. You can listen to my playlists on Spotify, watch
          my photos on Instagram, see what I'm currently doing on Twitter, or
          check out where I ride my road bike on Strava. I am currently in
          Poland (UTC+2) 🇵🇱
        </p>
        <div className="sm:flex sm:justify-between sm:align-middle">
          <div>
            <Button>
              <FaPaperPlane size="20px" />
              <span>Hire ME!</span>
            </Button>
            <Button outline={true}>
              <FaRegFileLines size="20px" />
              <span>Read CV</span>
            </Button>
          </div>
          <Button border={false}>
            <FaArrowRightLong size="20px" />
            <span>Download Resume</span>
          </Button>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-md text-center text-gray">
          © {new Date().getFullYear()} Ayoub Bigharassine. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
