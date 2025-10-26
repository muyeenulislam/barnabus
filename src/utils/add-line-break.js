const addLineBreaks = (text) => {
  if (!text) return null;

  const formatText = (line) => {
    line = line.replace(
      /\*\*(.*?)\*\*/g,
      (match, p1) => `<strong>${p1}</strong>`
    );

    line = line.replace(/--(.*?)--/g, (match, p1) => `<li>• ${p1}</li>`);

    line = line.replace(/#([\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,})#/g, (match, p1) => {
      return `<a href="mailto:${p1}">${p1}</a>`;
    });

    line = line.replace(/#(https?:\/\/[^\s]+)#/g, (match, p1) => {
      return `<a href="${p1}" target="_blank">${p1}</a>`;
    });

    return line;
  };

  return text.split("\n").map((line, index) => (
    <span key={index}>
      <span dangerouslySetInnerHTML={{ __html: formatText(line) }} />
      {index !== text.split("\n").length - 1 && <br />}
    </span>
  ));
};

export default addLineBreaks;
