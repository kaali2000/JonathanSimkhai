import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import DetailsPage from "./pages/detailsPage";

function App(props) {
  return (
    <div id="App">
      <NavBar />
      <DetailsPage />
    </div>
  );
}

export default App;
