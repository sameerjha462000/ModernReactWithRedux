import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      id: "assnjan",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want",
    },
    {
      id: "abjas",
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want",
    },
    {
      id: "nasknsak",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want",
    },
  ];
  return <Accordion items={items} />;
};

export default App;
