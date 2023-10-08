import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/create-blog"
          element={<h3>this is Upload Your BLOG Content PAge</h3>}
        />

        <Route path="/login" element={<h3>this is login page </h3>} />

        <Route
          path="/signup"
          element={<h3>This is Signup page </h3>}
        />
      </Routes>
    </>
  );
}

export default App;
