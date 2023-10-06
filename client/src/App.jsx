import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./page/Home/Home";

function App() {
  return (
    <>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<h3>this is Profile PAge </h3>} />
        <Route
          path="/create-blog"
          element={<h3>this is Upload Your BLOG Content PAge</h3>}
        />
      </Routes>
    </>
  );
}

export default App;
