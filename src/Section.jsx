function Section({ children }) {
  return (
    <section className="container mx-auto flex flex-col justify-center px-9 align-middle">
      <div className="mx-auto my-8 w-full max-w-3xl sm:my-12">{children}</div>
    </section>
  );
}

export default Section;
