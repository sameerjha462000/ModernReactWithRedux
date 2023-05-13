import Button from "./components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
const App = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        {/* outline use krne par icon dikh nhi rhe */}
        <Button primary rounded onClick={handleClick} className="mb-5">
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Buy Now!!
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoDatabase />
          See Deal!!
        </Button>
      </div>
      <div>
        <Button warning rounded outline>
          Hide Ads!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Something!!
        </Button>
      </div>
    </div>
  );
};

export default App;
