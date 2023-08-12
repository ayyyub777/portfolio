import { IoOpenOutline, IoCodeSlashOutline } from "react-icons/io5";

function Project() {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-4">
      <div className=" flex h-full w-full flex-col sm:flex-row">
        <img
          alt="project"
          src="/vid.JPG"
          className="aspect-[4/3] rounded-2xl object-cover sm:w-1/2"
        />
        <div className="mt-4 w-full bg-white sm:ml-8">
          <div className="justify-starts flex flex-wrap items-center">
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">
              Video Production & Editing
            </div>
          </div>
          <p className="mb-2 text-xl text-black sm:text-xl">
            Solution video pitch
          </p>
          <p className="mb-5 text-lg font-light text-gray">
            A pitch video showcasing the slide deck of the solution product
          </p>
          <a href="https://drive.google.com/file/d/10YmU8bUNZEVU4RRASZQByGDAztuuQ2FJ/view">
            <button className="mr-5 inline-flex items-center justify-center space-x-2 text-black">
              <IoOpenOutline size="20px" />
              <span className="underline">Preview</span>
            </button>
          </a>
          <button className="mr-5 inline-flex items-center justify-center space-x-2 text-black">
            <IoCodeSlashOutline size="20px" />
            <span className="underline">Source Code</span>
          </button>
        </div>
      </div>
      <div className="flex h-full w-full flex-col sm:flex-row">
        <img
          alt="project"
          src="/PRESENTATION.jpg"
          className="aspect-[4/3] rounded-2xl object-cover sm:w-1/2"
        />
        <div className="mt-4 w-full bg-white sm:ml-8">
          <div className="justify-starts flex flex-wrap items-center">
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">
              HCD | Conducting User Interviews
            </div>
          </div>
          <p className="mb-2 text-xl text-black sm:text-xl">
            Project presentation
          </p>
          <p className="mb-5 text-lg font-light text-gray">
            Tackling the large number of stray cats problem in Morocco,
            Providing a solution idea including wireframes and prototypes based
            on in-depth research.
          </p>
          <a href="https://docs.google.com/presentation/d/17PW2QjhJoEA26ucpAb2ynhKj0RwgWqZPyMauyb63pP8/edit#slide=id.g2599dfdc486_1_0">
            <button className="mr-5 inline-flex items-center justify-center space-x-2 text-black">
              <IoOpenOutline size="20px" />
              <span className="underline">Preview</span>
            </button>
          </a>
          <button className="mr-5 inline-flex items-center justify-center space-x-2 text-black">
            <IoCodeSlashOutline size="20px" />
            <span className="underline">Source Code</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
