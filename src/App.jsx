import Authentication from "./Firebase/Authentication";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
