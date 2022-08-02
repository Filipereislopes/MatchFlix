import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";
import Login from "pages/Login";
import Home from "pages/Home";
import Navbar from "components/Navbar";


function App() {

  return (
    <div>
      <div className="match-background"></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login">
            <Route element={<Login />} />
          </Route>
          <Route path="/listing">
            <Route path=":movieId" element={<Listing />} />
          </Route>
          <Route path="/form">
            <Route element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <footer className="match-roda-pe">
          <article>
            <p>Autor: Filipe dos Reis Lopes</p>
            <button>
              <a href="https://www.linkedin.com/in/filipe-dos-reis-lopes/">Acesse meu LinkedIn</a>
            </button>
          </article>
          <article>
            <p>Data 01/08/2022</p>
          </article>
        </footer>
      </div>
    </div>
  );

}

export default App;
