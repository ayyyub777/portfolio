function Project() {
  return (
    <div className="flex flex-col space-y-5">
      <div className=" flex h-full w-full flex-col sm:flex-row">
        <img
          alt="project"
          src="/youtube.jpg"
          className="aspect-[4/3] rounded-2xl object-cover sm:w-1/2"
        />
        <div className="mt-4 w-full bg-white sm:ml-8">
          <div className="justify-starts flex flex-wrap items-center">
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">
              HTML
            </div>
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">|</div>
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">CSS</div>
          </div>
          <p className="mb-2 text-xl text-black sm:text-xl">
            Consectetur adiping
          </p>
          <p className="text-lg font-light text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            harum natus deserunt non delectus amet?
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col sm:flex-row">
        <img
          alt="project"
          src="/pdf.png"
          className="aspect-[4/3] rounded-2xl object-cover sm:w-1/2"
        />
        <div className="mt-4 w-full bg-white sm:ml-8">
          <div className="justify-starts flex flex-wrap items-center">
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">
              HTML
            </div>
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">|</div>
            <div className="mr-1 rounded-2xl py-1.5 text-xs text-gray">CSS</div>
          </div>
          <p className="mb-2 text-xl text-black sm:text-xl">
            Consectetur adiping
          </p>
          <p className="text-lg font-light text-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            harum natus deserunt non delectus amet?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
