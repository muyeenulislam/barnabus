import React from "react";
import Image from "next/image";

const DefineCategoryCard = ({ children }) => {
  return (
    <div className="p-4 md:p-5 lg:p-12 rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[3rem] bg-Overlays-Black-9 shadow-boxPrimary relative overflow-hidden h-[28rem] lg:h-[35rem]">
      {children}
    </div>
  );
};
const DefineCategoryCardRound = ({ children }) => {
  return (
    <div className="h-[5.7rem] w-[5.7rem] md:h-[5.7rem] md:w-[5.7rem] lg:h-[7.5rem] lg:w-[7.5rem] shadow-boxPrimary rounded-full bg-Surface1 flex flex-col justify-center items-center gap-1.5 lg:gap-2 z-[200]">
      {children}
    </div>
  );
};

const DomainMemoryInnerCard = () => {
  return (
    <div className="flex flex-col p-[1.3rem] lg:p-[1.5rem] gap-2.5 lg:gap-3 rounded-[1.3rem] lg:rounded-3xl bg-Surface0 shadow-boxPrimary max-w-[90%] lg:max-w-[75%] relative">
      <div className="absolute flex shadow-boxPrimary rounded-full z-100 p-3 gap-3 bg-Surface0 right-[-9rem] top-[2.2rem]">
        <Image
          src="/icons/medicine.svg"
          alt="medicine"
          height={30}
          width={30}
          className="h-[1.5rem] w-[1.5rem]"
        />
        <p className="text-Content-Secondary text-ellipsis text-sm leading-5">
          Your relevant text goes here
        </p>
      </div>
      <div className="absolute flex shadow-boxPrimary rounded-full z-100 p-3 gap-3 bg-Surface0 right-[-9rem] top-[6.2rem]">
        <Image
          src="/icons/test-tube.svg"
          alt="test-tube"
          height={30}
          width={30}
          className="h-[1.5rem] w-[1.5rem]"
        />
        <p className="text-Content-Secondary text-ellipsis text-sm leading-5">
          Your relevant text goes here
        </p>
      </div>
      <Image
        src="/icons/sky-cursor-filled.svg"
        alt="sky-cursor-filled"
        height={30}
        width={30}
        className="h-[2.5rem] w-[2.5rem] absolute right-[4.5rem] bottom-[6.5rem]"
      />
      <div className="absolute flex bg-Brand-Accent-Alpha-100 shadow-AccentButton rounded-full z-100 p-3 gap-3 right-[-6rem] bottom-[4rem]">
        <Image
          src="/icons/doctor.svg"
          alt="doctor"
          height={30}
          width={30}
          className="h-[1.5rem] w-[1.5rem]"
        />
        <p className="text-Action-Buttons-Primary-Accent-Content-Default text-ellipsis text-sm leading-5">
          Healthcare Specialist
        </p>
      </div>
      <div className="absolute flex shadow-boxPrimary rounded-full z-100 p-3 gap-3 bg-Surface0 right-[-4.2rem] top-[10.2rem]">
        <Image
          src="/icons/medical-file.svg"
          alt="medical-file"
          height={30}
          width={30}
          className="h-[1.5rem] w-[1.5rem]"
        />
        <p className="text-Content-Secondary text-ellipsis text-sm leading-5">
          Your relevant...
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center bg-Badge-Brand-Accent-Subtle-Background rounded-full p-1">
          <Image
            src="/icons/barnabus-logo-neon.svg"
            alt="ai brain"
            height={35}
            width={35}
            className="h-[0.9rem] w-[0.9rem] lg:h-[1rem] lg:w-[1rem]"
          />
        </div>
        <p className="text-Content-Primary text-[0.8rem] lg:text-sm font-semibold leading-4">
          Barnabus
        </p>
      </div>
      <div className="flex flex-col shadow-boxPrimary rounded-xl lg:rounded-2xl p-[1px]">
        <div className="bg-Surface1 rounded-t-xl lg:rounded-t-2xl">
          <div className="flex flex-col gap-1 p-4">
            <h5 className="text-Content-Warning-Bold font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4">
              Patient History
            </h5>
            <p className="text-Content-Tertiary text-[0.68rem] lg:text-xs leading-[0.8rem] lg:leading-3.5">
              Previous diagnoses, allergies, lab results
            </p>
          </div>
          <div className="flex flex-col gap-1 p-4 pt-0">
            <h5 className="text-Content-Info-Bold font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4">
              Medication Records
            </h5>
            <p className="text-Content-Tertiary text-[0.68rem] lg:text-xs leading-[0.8rem] lg:leading-3.5">
              Antiplatelet therapy timing, interactions
            </p>
          </div>
          <div className="flex flex-col gap-1 p-4 pt-0">
            <h5 className="text-Content-Error-Bold font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4">
              Risk Scores
            </h5>
            <p className="text-Content-Tertiary text-[0.68rem] lg:text-xs leading-[0.8rem] lg:leading-3.5">
              Past NSQIP, DASI, RCRI outputs
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <h5 className="text-Content-Secondary font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4">
            A personalized note
          </h5>
          <p className="text-Content-Quartiary text-[0.68rem] lg:text-xs leading-[0.8rem] lg:leading-3.5 text-wrap">
            Patient had elevated risk score last quarter and is currently on
            dual antiplatelet therapy. Recommend holding X drug before surgery.
          </p>
          <h5 className="text-Brand-Accent-Alpha-200 font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4 mt-2">
            Emad Masoud
          </h5>
        </div>
      </div>
    </div>
  );
};

export { DefineCategoryCard, DefineCategoryCardRound, DomainMemoryInnerCard };
