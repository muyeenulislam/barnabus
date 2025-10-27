const BlackCardDefault = ({ additionalStyle = "", children }) => {
  return (
    <div
      className={`p-5 md:p-6 lg:p-16 rounded-3xl md:rounded-4xl lg:rounded-[4rem] bg-Overlays-Black-2 shadow-boxPrimary z-101 ${additionalStyle}`}
    >
      {children}
    </div>
  );
};
const BlackCardSmall = ({ additionalStyle = "", children }) => {
  return (
    <div
      className={`p-[1.5rem] md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] bg-Overlays-Black-9 shadow-boxPrimary z-101 ${additionalStyle}`}
    >
      {children}
    </div>
  );
};
const GrayCard = ({ additionalStyle = "", children }) => {
  return (
    <div
      className={`p-4 md:p-5 lg:p-6 rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[1.5rem] bg-Surface1 shadow-boxPrimary z-101 ${additionalStyle}`}
    >
      {children}
    </div>
  );
};

export { BlackCardDefault, BlackCardSmall, GrayCard };
