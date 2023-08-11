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
          An enthusiastic and adaptable software developer who loves creating
          smart and effective solutions for everyday problems. I have a solid
          grasp of different programming languages and a strong attention to
          detail. My expertise lies in transforming intricate concepts into
          user-friendly applications. My portfolio showcases my personal
          projects, demonstrating my skills, creativity, and commitment to
          pushing boundaries.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
