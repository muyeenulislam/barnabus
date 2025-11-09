import React from "react";

const SolutionsIntro = () => {
  return (
    <section className="page-intro">
      <div className="page-intro-inner md:max-w-[30rem] lg:max-w-[40rem]">
        <h1 className="page-intro-heading">
          An Intelligent Ecosystem,
          <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Not Just Another Tool
          </span>
        </h1>
        <p className="page-intro-subheading">
          Barnabus is more than a platform, it’s a living ecosystem of
          intelligent agents designed to think, act, and adapt across any
          domain.
          <br /> <br />
          Unlike conventional AI tools that serve a fixed purpose, Barnabus is
          configurable, composable, and domain-aware. It can be deployed,
          customized, and evolved to meet unique industry requirements, from
          hospitals and fabs to enterprises and public institutions.
        </p>
      </div>
    </section>
  );
};

export default SolutionsIntro;
