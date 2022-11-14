import { MoviesState } from "./context/movies/movies-state";
import { Home } from "./pages/home";

function App() {
  return (
    <MoviesState>
      <Home />
    </MoviesState>
  );
}

export default App;
