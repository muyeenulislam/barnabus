const BlackCard = ({ additionalStyle = "", children }) => {
  return (
    <div
      className={`p-5 md:p-6 lg:p-16 rounded-3xl md:rounded-4xl lg:rounded-[4rem] bg-Overlays-Black-2 shadow-boxPrimary z-101 ${additionalStyle}`}
    >
      {children}
    </div>
  );
};

export { BlackCard };
