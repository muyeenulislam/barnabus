import React from "react";

const TechnologyIntro = () => {
  return (
    <section className="page-intro">
      <div className="page-intro-inner md:max-w-[40rem] lg:max-w-[50rem]">
        <h1 className="page-intro-heading">
          The Living <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Intelligence Fabric
          </span>
        </h1>
        <p className="page-intro-subheading">
          Barnabus isn’t a system you install, it’s a living intelligence fabric
          that grows, adapts, and reasons across any environment. <br />
          <br />
          Built on a modular architecture of collaborating agents, Barnabus
          doesn’t just follow logic — it learns, understands, and evolves. At
          its heart, Barnabus unites reasoning, memory, and governance into a
          continuously adaptive ecosystem.
        </p>
      </div>
    </section>
  );
};

export default TechnologyIntro;
