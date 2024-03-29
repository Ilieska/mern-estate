
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateList from "./pages/CreateList";




export default function App() {
    return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route  element={<PrivateRoute />}> 
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateList />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}