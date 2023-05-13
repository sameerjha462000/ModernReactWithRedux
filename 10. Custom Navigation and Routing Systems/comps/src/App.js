import Button from "./components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
const App = () => {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
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
          <GoBell />
          Hide Ads!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBell />
          Something!!
        </Button>
      </div>
    </div>
  );
};

export default App;
