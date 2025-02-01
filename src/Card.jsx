const Card = ({ text, link, activeContent, setActiveContent }) => {
  return (
    <li
      onClick={() => setActiveContent(text)}
      className="card"
      style={{ textDecoration: activeContent === text ? "underline" : "" }}
    >
      {text}
    </li>
  );
};

export default Card;
