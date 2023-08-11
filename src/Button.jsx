function Button({ outline = false, children, border = true }) {
  if (outline) {
    return (
      <button className=" bg-transparent mb-5 mr-5 inline-flex w-full items-center justify-center space-x-4 rounded-xl border border-black px-5 py-4 text-center text-black sm:mb-0 sm:w-fit">
        {children}
      </button>
    );
  }
  if (!border) {
    return (
      <button className=" bg-transparent mb-5 mr-5 inline-flex w-full items-center justify-center space-x-4 px-5 py-4 text-center text-black sm:mb-0 sm:w-fit">
        {children}
      </button>
    );
  }
  return (
    <button className="mb-5 mr-5 inline-flex w-full items-center justify-center space-x-4 rounded-xl bg-black px-5 py-4 text-center text-white hover:bg-black/90 sm:mb-0 sm:w-fit">
      {children}
    </button>
  );
}

export default Button;
