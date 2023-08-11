function Title({ children }) {
  return (
    <h2 className=" invisible mb-5 text-gray sm:visible sm:mt-8 sm:text-xl">
      {children}
    </h2>
  );
}

export default Title;
