function Hero() {
  return (
    <div className="text-center sm:mx-0 sm:mt-[100px] sm:text-left">
      <div className="avatar">
        <img
          className="mx-auto h-32 w-32 rounded-full border border-white/10 object-cover sm:mx-0"
          src="/pic.jpeg"
          alt="image"
        />
      </div>
      <div className="title my-14 mt-8">
        <h1 className="text-3xl font-bold">Hi! I'm Ayoub Bigharassine</h1>
        <h2 className="mb-6 text-xl">ReactJs Developer</h2>
        <h2 className="text-lg text-gray sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          sapiente corporis cupiditate inventore et nobis autem! Fuga sequi
          quasi perferendis non accusamus, ex, tempore ea minima maxime delectus
          culpa quibusdam?
        </h2>
      </div>
    </div>
  );
}

export default Hero;
