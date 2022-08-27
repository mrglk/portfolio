import "./App.scss";
import { Profile } from "./components/Profile/Profile";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
