import "./App.css";
import Banners from "./Components/Banners/Banners";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { actions, originals } from "./urls";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Banners />
      <RowPost url={originals} title="Netflix Orginals" />
      <RowPost url={actions} title="Actions" isSmall />
    </div>
  );
}

export default App;
