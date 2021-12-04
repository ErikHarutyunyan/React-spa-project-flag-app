// Router
import { Routing } from "./routes/Router";

// Components
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routing />
      </Main>
    </>
  );
}

export default App;
