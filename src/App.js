import Login from "./Pages/LoginPage/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from "./Pages/SignUpPage/SignUp";

function App() {
  return (
   <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Signup" element={<SignUp/>}></Route>
          
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
