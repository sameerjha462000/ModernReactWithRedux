import Button from "./components/Button";
const App = () => {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click me!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy Now!!
        </Button>
      </div>
      <div>
        <Button success rounded>
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
