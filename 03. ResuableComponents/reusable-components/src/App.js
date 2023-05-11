import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistance</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImg}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" image={SiriImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Second way
// export default App(){
//   return <h1>Hi there!!!</h1>;
// }
