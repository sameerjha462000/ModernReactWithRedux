import Button from "./Button";

const App = (props) => {
  return (
    <div>
      <div>
        <Button primary rounded>
          Hi There!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Seal Deal
        </Button>
      </div>
      <div>
        <Button rounded outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary secondary>
          Something!
        </Button>
      </div>
    </div>
  );
};

export default App;
