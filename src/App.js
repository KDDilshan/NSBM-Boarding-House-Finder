import Login from "./Pages/LoginPage/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from "./Pages/SignUpPage/SignUp";
import BoardingPage from "./Pages/BoardingPage/BoardingPage";
import HouseDetails from "./Pages/HouseDetails/HouseDetails"
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
   <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<SignUp/>}></Route>
          <Route path="/BoardingPage" element={<BoardingPage/>}></Route>
          <Route path="/HouseDetails" element={<HouseDetails/>}></Route>
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
