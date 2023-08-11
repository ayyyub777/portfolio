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
          Want to learn more about me? 👋
        </h1>
        <p className=" mb-10 max-w-lg text-xl text-black">
          An enthusiastic and adaptable software developer who loves creating
          smart and effective solutions for everyday problems. With a solid
          grasp of different programming languages and a strong attention to
          detail. My expertise lies in transforming intricate concepts into
          user-friendly applications.
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
