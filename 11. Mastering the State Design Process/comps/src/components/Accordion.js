import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  // each piece of accordion has a label and a content
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    // we use functional state updates because of delayed state updates ... fuck you react
    setExpandedIndex((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });

    // // we need to check if the user is clicking for the second time
    // if (expandedIndex === index) {
    //   // this means that the user is trying to close the content
    //   // thus we need to set the expandedIndex to be -1
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(index);
    // }
  };

  const renderedItems = items.map((item, index) => {
    let content = <div></div>;
    let icon = (
      <span className="text-2xl">
        <GoChevronLeft />
      </span>
    );

    if (expandedIndex === index) {
      // show the content
      content = <div className="border-b p-5">{item.content}</div>;
      icon = (
        <span className="text-2xl">
          <GoChevronDown />
        </span>
      );
    }

    return (
      <div key={item.id}>
        <div
          className="flex justify-between item-center p-3 bg-gray-50 border-b cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label} {icon}
        </div>
        {content}
      </div>
    );
  });

  return <>{renderedItems}</>;
};

export default Accordion;
