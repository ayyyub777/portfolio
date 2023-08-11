function Section({ children }) {
  return (
    <section className="container mx-auto flex flex-col justify-center px-9 align-middle">
      <div className="mx-auto my-12 w-full max-w-3xl">{children}</div>
    </section>
  );
}

export default Section;
