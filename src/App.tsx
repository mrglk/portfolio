import "./App.scss";
import { Profile } from "./components/Profile/Profile";
import { PortfolioList } from "./components/PortfolioList/PortfolioList";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App__inner">
        <Profile />
        <PortfolioList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
