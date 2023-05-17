const Accordion = ({ items }) => {
  // each piece of accordion has a label and a content

  const renderedItems = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <>{renderedItems}</>;
};

export default Accordion;
