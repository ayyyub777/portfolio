function Hero() {
  return (
    <div className="text-center sm:mx-0 sm:mt-[100px] sm:text-left">
      <div className="avatar hidden">
        <img
          className="mx-auto h-32 w-32 rounded-full border border-white/10 object-cover sm:mx-0"
          src="/pic.jpeg"
          alt="image"
        />
      </div>
      <div className="title my-14 mt-8">
        <h1 className="text-3xl font-bold">Hi! I'm Ayoub Bigharassine</h1>
        <h2 className="mb-6 text-xl">Software Developer</h2>
        <h2 className="text-lg text-gray sm:text-xl">
          Explore my portfolio, a lively exhibition of my personal projects
          showcasing my skills, creativity, and commitment to pushing
          boundaries.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
