function Hero() {
  var date = new Date().getHours();
  var greeting = "Hello!";
  if (date >= 5 && date <= 12) {
    greeting = "Good Morning!";
  } else if (date > 12 && date <= 17) {
    greeting = "Good Afternoon!";
  } else if (date > 17 && date <= 21) {
    greeting = "Good Evening!";
  }
  return (
    <div className="mt-14 text-center sm:mx-0 sm:mt-[100px] sm:text-left">
      <div className="avatar hidden">
        <img
          className="mx-auto h-32 w-32 rounded-full border border-white/10 object-cover sm:mx-0"
          src=""
          alt="image"
        />
      </div>
      <div className="text-4xl">👋</div>
      <div className="mt-4">
        <h1 className="mb-2 text-3xl font-bold">
          {greeting} I'm Ayoub Bigharassine
        </h1>
        <h2 className="mb-6 text-xl">Software Developer</h2>
        <h2 className="mb-14 text-lg text-gray sm:text-xl">
          Explore my portfolio, a lively exhibition of my personal projects
          showcasing my skills, creativity, and commitment to pushing
          boundaries.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
