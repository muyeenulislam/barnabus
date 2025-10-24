import React from "react";
import Image from "next/image";

const InputCards = ({ icon, title, variant, items = [] }) => {
  const background =
    variant === "teal"
      ? "rgba(12, 126, 132, 0.05)"
      : variant === "purple"
      ? "rgba(148, 42, 164, 0.05)"
      : variant === "yellow"
      ? "rgba(148, 105, 0, 0.05)"
      : variant === "violet"
      ? "rgba(109, 69, 187, 0.05)"
      : null;

  const boxShadow =
    variant === "teal"
      ? "0 0 1.175px 0 #11C2CC inset, 0 0 1.175px 0 #11C2CC inset, 0 0 1.175px 0 #11C2CC inset, 0 0 1.175px 0 #11C2CC inset, 0 0 5.873px 0 #11C2CC inset"
      : variant === "purple"
      ? "0 0 1.175px 0 #BE37D2 inset, 0 0 1.175px 0 #BE37D2 inset, 0 0 1.175px 0 #BE37D2 inset, 0 0 1.175px 0 #BE37D2 inset, 0 0 5.873px 0 #BE37D2 inset"
      : variant === "yellow"
      ? "0 0 1.175px 0 #EBBB01 inset, 0 0 1.175px 0 #EBBB01 inset, 0 0 1.175px 0 #EBBB01 inset, 0 0 1.175px 0 #EBBB01 inset, 0 0 5.873px 0 #EBBB01 inset "
      : variant === "violet"
      ? "0 0 1.175px 0 #8C5CEB inset, 0 0 1.175px 0 #8C5CEB inset, 0 0 1.175px 0 #8C5CEB inset, 0 0 1.175px 0 #8C5CEB inset, 0 0 5.873px 0 #8C5CEB inset"
      : null;

  const textColor =
    variant === "teal"
      ? "text-[#CCFCFF]"
      : variant === "purple"
      ? "text-[#CF90D8]"
      : variant === "yellow"
      ? "text-[#E3CA6B]"
      : variant === "violet"
      ? "text-[#B2A5F5]"
      : "text-[#FFFFFF]";

  const titleBorder =
    variant === "teal"
      ? "border-b-[0.073rem] border-[#11C2CC]"
      : variant === "purple"
      ? "border-b-[0.073rem] border-[#BE37D2]"
      : variant === "yellow"
      ? "border-b-[0.073rem] border-[#EBBB01]"
      : variant === "violet"
      ? "border-b-[0.073rem] border-[#8C5CEB]"
      : "border-b-[0.073rem] border-[#FFFFFF]";

  const subtitleBorder =
    variant === "teal"
      ? "border-b-[0.043rem] border-[#11C2CC]"
      : variant === "purple"
      ? "border-b-[0.043rem] border-[#BE37D2]"
      : variant === "yellow"
      ? "border-b-[0.043rem] border-[#EBBB01]"
      : variant === "violet"
      ? "border-b-[0.043rem] border-[#8C5CEB]"
      : "border-b-[0.043rem] border-[#FFFFFF]";

  return (
    <div
      className="flex flex-col items-center justify-center gap-6 p-6 rounded-[1.25rem] md:gap-8 md:p-8 md:rounded-4xl lg:gap-[4rem] backdrop-blur-[30px]"
      style={{ background, boxShadow }}
    >
      <Image
        src={icon}
        width={40}
        height={40}
        alt={title}
        className="h-[3.75rem] w-[3.75rem] md:h-[5rem] md:w-[5rem] lg:h-[6rem] lg:w-[6rem]"
      />
      <div className="flex flex-col gap-5 md:gap-8">
        <h2
          className={`font-bold text-Content-Primary text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10 ${titleBorder} pb-3 lg:pb-4`}
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-y-3 md:gap-x-12 lg:gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex gap-3 pb-1.5 md:pb-2 lg:pb-3 ${
                index !== items.length - 1 ? `${subtitleBorder}` : ""
              }`}
            >
              <div className="h-[2.5rem] w-[2.5rem] shrink-0">{item.icon}</div>
              <div className="space-y-3">
                <h3 className="font-medium text-base leading-4 lg:text-lg">
                  {item.label}
                </h3>
                <p
                  className={`${textColor} text-xs leading-4 lg:text-sm lg:leading-5`}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputCards;
