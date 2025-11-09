import React from "react";

const TrustIntro = () => {
  return (
    <section className="page-intro !py-[4rem] md:!py-[6rem] lg:!py-[8rem]">
      <div className="page-intro-inner md:max-w-[40rem] lg:max-w-[50rem]">
        <h1 className="page-intro-heading">
          Trust is not declared. <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            It’s engineered.
          </span>
        </h1>
        <p className="page-intro-subheading">
          In Barnabus, trust is built into the architecture — not added as a
          feature. Every decision, every inference, and every data exchange is
          governed, explainable, and accountable to a living system of
          oversight.
        </p>
        <p className="page-intro-subheading !text-Content-Brand-Accent">
          This is how intelligence earns legitimacy.
        </p>
      </div>
    </section>
  );
};

export default TrustIntro;
