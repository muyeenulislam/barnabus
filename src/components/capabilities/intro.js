import React from "react";

const CapabilitiesIntro = () => {
  return (
    <section className="page-intro">
      <div className="page-intro-inner md:max-w-[30rem] lg:max-w-[40rem]">
        <h1 className="page-intro-heading">
          The Architecture of{" "}
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Living Intelligence
          </span>
        </h1>
        <p className="page-intro-subheading">
          Barnabus is not a tool. Not a platform. It is the first{" "}
          <strong>Agentic Intelligence System</strong>, a living architecture
          that thinks, acts, learns, and aligns with purpose.
          <br />
          <br /> Where others automate tasks, Barnabus builds the{" "}
          <strong>foundations of AGI.</strong>
        </p>
      </div>
    </section>
  );
};

export default CapabilitiesIntro;
