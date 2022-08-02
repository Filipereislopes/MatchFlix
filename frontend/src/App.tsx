import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";
import Login from "pages/Login";
import Home from "pages/Home";
import Navbar from "components/Navbar";

function App(){

  return(

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login">
        <Route element={<Login/>}/>
      </Route>
      <Route path="/listing">
        <Route path=":movieId" element={<Listing/>}/>
      </Route>
      <Route path="/form">
        <Route element={<Form/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );

}

export default App;
