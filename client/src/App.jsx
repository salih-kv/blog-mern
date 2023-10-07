import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import Blog from "./page/Blogging/Blog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/create-blog"
          element={<Blog />}
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/signup"
          element={<Signup />}
        />
      </Routes>
    </>
  );
}

export default App;
